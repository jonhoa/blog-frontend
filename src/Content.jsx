import axios from 'axios';
import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from './LogoutLink';

export function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("running handle posts");
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
      console.log(posts);
    });
  };
  useEffect(handleIndexPosts, []);
  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json").then(response => {
      setPosts([...posts, response.data]);
    });
  };
  return (
    <div>
      <br/>
      <br/>
      <hr/>
      <PostsNew onCreatePost={handleCreatePost}/>
      <br/>
      <br/>
      <br/>
      <hr/>
      <Login/>
      <br/>
      <br/>
      <hr/>
      <LogoutLink/>
      <br/>
      <br/>
      <hr/>
      <Signup />
      <br/>
      <br/>
      <hr/>
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}