import axios from 'axios';
import { useState } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from "./PostsNew";

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}
