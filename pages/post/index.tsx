import { Component } from "react";
import Head from "next/head";
import axios from "axios";
import FeedPost from "../../public/components/FeedPost";
import Footer from "../../public/components/Footer";
import Header from "../../public/components/Header";
import Loader from "../../public/components/Loader";

interface PostsState {
  posts: PostApiForm[];
  isReachedBottom: boolean;
  loadedPageCount: number;
}

class Posts extends Component<{}, PostsState> {

  public readonly BASE_URL = "https://dummyapi.io/data/api";
  public readonly APP_ID = "600259f00769bf047313ec65";
  public readonly MAX_POST = 884;
  public readonly OFFSET_CAP = 100;
  public readonly LOAD_LIMIT = 8;

  public state = {
    posts: [] as PostApiForm[],
    isReachedBottom: false,
    loadedPageCount: 0
  };

  public isRequesting: boolean = true;

  /** @override */
  public componentDidMount(): void {
    this.loadRequest();

    document.addEventListener("scroll", this.trackScrolling);
  }

  /** @override */
  public componentWillUnmount(): void {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  private async loadRequest(): Promise<void> {
    try {
      const params = { limit: this.LOAD_LIMIT, page: this.state.loadedPageCount };
      this.isRequesting = true;

      const res = await axios.get<DummyApiResquestedForm<PostApiForm>>(`${this.BASE_URL}/post`, { headers: { "app-id": this.APP_ID }, params });

      // console.log(res.data);

      this.isRequesting = false;

      const posts = [...this.state.posts, ...res.data.data];
      const loadedPageCount = this.state.loadedPageCount + 1;

      this.setState({ ...this.state, posts, loadedPageCount });
    }
    catch (err) {
      console.error(err.data);
    }
  }

  private trackScrolling = (): void => {
    if (this.state.posts.length > this.OFFSET_CAP) return;
    if (this.isRequesting) return;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadRequest();

      this.setState({ ...this.state, isReachedBottom: true });
    }
  };

  public renderFeedPost(): JSX.Element[] {
    return this.state.posts.map((post) => {
      return <FeedPost key={post.id} {...post} configs={{ isViewing: false }}/>
    });
  }

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
          <title>Lab 07 | Posts View</title>
        </Head>
        { !this.state.posts.length && <Loader isGlobal={true} /> }
        <Header rootPath="./" />
        <main>
          <h1>Posts View</h1>
          <div className="post-container">
            {this.renderFeedPost()}
          </div>
        </main>
        { this.state.isReachedBottom && <Loader isGlobal={false} /> }
        <Footer />
      </>
    );
  }
}

export default Posts;
