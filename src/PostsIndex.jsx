export function PostsIndex(props) {
  setTimeout(function() {
    console.log(props.posts);
  }, 2000);
  return (
    <div id ="posts-index">
      {props.posts.map(post =>(
        <div>
          <p>id{post.id}</p>
        </div>
      ))}
    </div>
  );
}
