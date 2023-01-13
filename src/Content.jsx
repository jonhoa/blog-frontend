import axios from 'axios';
import { useState } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";

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
      <br/>
      <br/>
      <hr/>
      <PostsNew />
      <br/>
      <br/>
      <br/>
      <hr/>
      <Login/>
      <br/>
      <br/>
      <hr/>
      <Signup />
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

