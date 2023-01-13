import axios from 'axios';
import { useState } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from "./PostsNew";
import { UsersNew } from "./UsersNew";

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
      <UsersNew />
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}
