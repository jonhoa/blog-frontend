export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        Title: <input name="title" type="input"></input><br/>
        Body: <input name="body" type="input"></input><br/>
        Image: <input name="image" type="input"></input>
        <button type ="submit">Submit</button>
      </form>
    </div>
  );
}
