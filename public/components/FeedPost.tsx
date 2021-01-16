import { FC } from "react";
import Link from "next/link";
import PostHeader from "./PostHeader";

interface FeedConfigs {
  isViewing: boolean;
}

interface FeedPostProps extends PostApiForm {
  configs: FeedConfigs
}

const FeedPost: FC<FeedPostProps> = (props) => {

  const renderComments = (): JSX.Element[] => {
    return props.tags.map((tag) => {
      return <div key={tag} className="tag">{tag}</div>
    });
  }

  const renderViewPost = (): JSX.Element => {
    return !props.configs.isViewing ? <> • <Link href={`./post/${props.id}`}><span>view post</span></Link></> : <></>
  }

  return (
    <div className="feed-post">
      <PostHeader {...props.owner} publishDate={props.publishDate} />
      <div className="tags-container">
        {renderComments()}
      </div>
      <div className="image-container">
        <div className="post-nav">
          <div>
            <div className="like-icon">
              <aside>
                <i className="far fa-heart"></i>
              </aside>
              <aside>{props.likes}</aside>
            </div>
          </div>
          <div>
            <div className="round-icon">
              <i className="fas fa-expand-alt"></i>
            </div>
            <div className="round-icon">
              <i className="fas fa-comments"></i>
            </div>
            <div className="round-icon">
              <i className="fas fa-share"></i>
            </div>
          </div>
        </div>
        <div className="post-text">{props.text}{renderViewPost()}</div>
        <img src={props.image} alt="post-img"/>
      </div>
    </div>
  );
}

export default FeedPost;