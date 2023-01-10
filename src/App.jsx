import axios from 'axios';
import { useState } from 'react';
import reactLogo from './assets/react.svg';

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form >
      Title: <input label= "Name" type = "input"></input><br></br>
      Body: <input label= "body" type = "input"></input><br></br>
      Image: <input label= "image" type = "input"></input>
      </form>
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew/>
      <button onClick={handleIndexPosts}>Fetch Data</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <PostsIndex/>
      <Footer/>
      <Content/>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

export default App;
