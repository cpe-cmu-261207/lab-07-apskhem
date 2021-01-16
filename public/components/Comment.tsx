import { FC } from "react";
import PostHeader from "./PostHeader";

const Comment: FC<CommentApiForm> = (props) => {
  return (
    <div className="comment">
      <PostHeader {...props.owner} publishDate={props.publishDate} />
      <div className="content">{props.message}</div>
    </div>
  );
}

export default Comment;
