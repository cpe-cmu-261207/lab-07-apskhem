import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../public/components/Footer";
import Head from "next/head";
import FeedPost from "../../public/components/FeedPost";
import Comment from "../../public/components/Comment";
import Header from "../../public/components/Header";
import Loader from "../../public/components/Loader";

// interfaces, contants and types
const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "600259f00769bf047313ec65";

// function component
const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  const [ post, setPost ] = useState<PostApiForm | null>(null);
  const [ comments, setComments ] = useState<CommentApiForm[] | null>(null);

  // on page load
  useEffect(() => {
    if (!postId) return;

    requestPost();
    requestComments();
  }, [postId]);

  // request post function
  const requestPost = async () => {
    try {
      const postRes = await axios.get<PostApiForm>(`${BASE_URL}/post/${postId}`, { headers: { "app-id": APP_ID }});

      setPost(postRes.data);
    }
    catch (err) {
      console.error(err.data);
    }
  }

  // request comments function
  const requestComments = async () => {
    try {
      const commentRes = await axios.get<DummyApiResquestedForm<CommentApiForm>>(`${BASE_URL}/post/${postId}/comment`, { headers: { "app-id": APP_ID }});

      setComments(commentRes.data.data);
    }
    catch (err) {
      console.error(err.data);
    }
  }

  // render function
  const renderComment = (): JSX.Element[] | JSX.Element => {
    return comments?.map((comment) => {
      return <Comment key={comment.id} {...comment} />
    }) ?? <></>;
  }

  // render
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
        <title>{post ? `Lab 07 | ${post?.owner.firstName}'s Post` : "Lab 07 | Post"}</title>
      </Head>
      <Header rootPath="../" />
      { !post && <Loader isGlobal={true} /> }
      <main>
        <h1>{post?.owner.firstName}'s Post</h1>
        <div>
          { post && <FeedPost {...post} configs={{ isViewing: true }}/>}
        </div>
        <div className="comment-section">
          <div className="comment-header">
            <h3>{comments?.length ?? 0} {comments && comments.length === 1 ? "Comment" : "Comments"}</h3>
          </div>
          <div className="comment-container">
            {renderComment()}
          </div>
        </div>
      </main>
      { post && !comments && <Loader isGlobal={false} /> }
      <Footer />
    </>
  );
}

export default Post;