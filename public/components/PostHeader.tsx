import { FC } from "react";

interface PostHeaderProps {
  picture: string;
  firstName: string;
  lastName: string;
  id: string;
  publishDate: string;
}

const PostHeader: FC<PostHeaderProps> = (props) => {

  const { date, time } = ((value: string) => {
    let [year, month, dayAndTime] = value.split("-");
    const [day, time] = dayAndTime.split("T");
    const [hour, min, secAndMsec] = time.split(":");

    const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return { date: `${day}, ${MONTH_NAMES[+month - 1]} ${year}`, time: `${+hour % 12}:${min} ${+hour >= 12 ? "P.M." : "A.M."}`};
  })(props.publishDate);

  return (
    <div className="post-header">
      <aside>
        <img src={props.picture} alt="user-pic"/>
      </aside>
      <aside>
        <li className="user-name">{props.firstName} {props.lastName}</li>
        <li className="user-id">{props.id}</li>
      </aside>
      <aside>
        <li className="publish-time">{time}</li>
        <li className="publish-date">{date}</li>
      </aside>
    </div>
  );
}

export default PostHeader;
