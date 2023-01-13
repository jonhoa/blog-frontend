

export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action ="http://localhost:3000/posts.json" method ="POST">
        Title: <input name="title" type="input"></input><br/>
        Body: <input name="body" type="input"></input><br/>
        Image: <input name="image" type="input"></input>
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}
