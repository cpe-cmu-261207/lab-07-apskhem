import { Component } from "react";
import Head from "next/head";
import Footer from "../public/components/Footer";
import Header from "../public/components/Header";
import CourseForm from "../public/components/CourseForm";
import CourseCard from "../public/components/CourseCard";
import { GRADES } from "../public/utils/grades";

interface GpaCalState {
  courseList: RegularCourseForm[];
  errorText: string;
}

class GpaCal extends Component<{}, GpaCalState> {

  public state = {
    courseList: [] as RegularCourseForm[],
    errorText: ""
  }

  /** @override */
  public componentDidMount(): void {
    const rawData = localStorage.getItem("courseList");
    if (!rawData) return;
    
    const courseList = JSON.parse(rawData);

    this.setState({ ...this.state, courseList });
  }

  /** @override */
  public componentDidUpdate(): void {
    localStorage.setItem("courseList", JSON.stringify(this.state.courseList));
  }

  // utils: parse string grade to number grade
  private parseStringGrade = (grade: Grade) => {
    return GRADES.find((gradeEntry) => gradeEntry.name === grade)?.value ?? null;
  }

  // calculate gpa and return gpa
  private calculateGPA = () => {
    let weight = 0;
    let sumWeight = 0;

    for (const course of this.state.courseList) {
      const numGrade = this.parseStringGrade(course.grade);
      if (numGrade === null) continue;

      weight += course.credit;
      sumWeight += course.credit * numGrade;
    }

    return weight ? sumWeight / weight : 0;
  }

  // calculate weight of all courses in the list
  private calculateWeight = () => {
    return this.state.courseList.reduce((acc, course) => acc += course.credit, 0);
  }

  // add course on submit
  public addCourse = (...courseInputData: RegularCourseForm[]) => {
    this.setState({ ...this.state, courseList: [...this.state.courseList, ...courseInputData], errorText: "" });
  }

  // set error text
  public setErrorText = (errorText: string) => {
    this.setState({ ...this.state, errorText });
  }

  // on delete course handler
  public deleteCourse = (id: string) => {
    const courseList = this.state.courseList.filter((course) => id !== course.id);

    this.setState({ ...this.state, courseList });
  }

  // render course card
  private renderCourseCards = (): JSX.Element[] => {
    return this.state.courseList.map((course) => {
      return <CourseCard key={course.id} {...course} onDeleteHandler={this.deleteCourse}/>;
    });
  }

  public render(): JSX.Element {
    const len = this.state.courseList.length;

    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 | GPA Calculator</title>
        </Head>
        <Header rootPath="./" />
        <main>
          <h1>GPA Calculator</h1>
          <div className="content-container">
          <aside id="gpa-display-box">
            <div>
              <li>Your GPA is</li>
              <li id="gpa-display-text">{this.calculateGPA().toFixed(2)}</li>
              <li id="gpa-display-credit">
                {/* TODO display calculated GPA */}
                with total credit of {this.calculateWeight()} from {len} {len === 1 ? "course" : "courses"}
              </li>
            </div>
          </aside>
          <aside id="list-display-box" className="fansy-drop-shadow">
            <li className="course-header-text">My course list<span id="error-text">{this.state.errorText}</span></li>
            <div id="list-container">
              {/* TODO display courses */}
              {this.renderCourseCards()}
            </div>
            <CourseForm addCourseHandler={this.addCourse} setErrorText={this.setErrorText} courseList={this.state.courseList}/>
          </aside>
        </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default GpaCal;
