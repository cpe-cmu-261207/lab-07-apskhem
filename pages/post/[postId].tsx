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

interface PostData {
  post: PostApiForm | null;
  comment: CommentApiForm[];
}

// function component
const Post = () => {
  const router = useRouter();
  const { postId } = router.query;

  const [ state, setState ] = useState<PostData>({ post: null, comment: [] });

  // on page load
  useEffect(() => {
    (async () => {
      try {
        const commentRes = await axios.get<DummyApiResquestedForm<CommentApiForm>>(`${BASE_URL}/post/${postId}/comment`, { headers: { "app-id": APP_ID }});
        const postRes = await axios.get<PostApiForm>(`${BASE_URL}/post/${postId}`, { headers: { "app-id": APP_ID }});
  
        // console.log(commentRes.data);
        // console.log(postRes.data);

        setState({ post: postRes.data, comment: commentRes.data.data });
      }
      catch (err) {
        console.error(err.data);
      }
    })();
  }, []);

  // functions
  const renderComment = (): JSX.Element[] => {
    return state.comment.map((comment) => {
      return <Comment key={comment.id} {...comment} />
    });
  }

  // render
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap" />
        <title>{state.post ? `Lab 07 | ${state.post?.owner.firstName}'s Post` : "Lab 07 | Post"}</title>
      </Head>
      <Header rootPath="../" />
      { !state.post && <Loader isGlobal={true} /> }
      <main>
        <h1>{state.post?.owner.firstName}'s Post</h1>
        <div>
          { state.post && <FeedPost {...state.post} configs={{ isViewing: true }}/>}
        </div>
        <div className="comment-section">
          <div className="comment-header">
            <h3>{state.comment.length} {state.comment.length === 1 ? "Comment" : "Comments"}</h3>
          </div>
          <div className="comment-container">
            {renderComment()}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Post;