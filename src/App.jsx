import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

      <div id="posts-new">
        <h1>New post</h1>
        <form >
          <p>Title</p><input label= "Name" type = "input"></input>
          <p>Body</p><input label= "body" type = "input"></input>
          <p>Image</p><input label= "image" type = "input"></input>
        </form>
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
