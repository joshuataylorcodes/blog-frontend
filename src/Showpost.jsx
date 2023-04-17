export function PostsShow(props) {
  return (
    <div id="post-show">
      <h2>Title: {props.post.title}</h2>
      <p>Body: {props.post.body}</p>
    </div>
  );
}
