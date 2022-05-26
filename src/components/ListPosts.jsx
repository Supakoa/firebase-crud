import React from "react";
import Post from "./Post";
import { getDocs } from "firebase/firestore";
import { postsCollectionRef } from "../lib/firebase.collection";

function ListPosts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts();
    return () => {
      setPosts([]);
    };
  }, []);

  async function getPosts() {
    await getDocs(postsCollectionRef)
      .then((resp) => {
        const posts = resp.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setPosts(posts);
      })
      .catch((err) => console.error(err.message));
  }
  return (
    <div className="container">
      <h4 className="p-3">ListPosts</h4>
      <button
        onClick={() => getPosts()}
        className="bg-gray-400 text-white border rounded-lg p-1 m-2 shadow-2xl hover:shadow-sm hover:border-2 hover:bg-gray-500 transition-all duration-100"
      >
        Refresh
      </button>
      <ul>
        {posts.map((post, idx) => (
          <Post
            fnGetPost={getPosts}
            key={`post-${idx}`}
            docId={post.docId}
            message={post?.message}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListPosts;
