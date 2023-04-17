export function Indexpost(props) {
  return (
    <div>
      <div id="posts-index">
        <h1>Posts</h1>

        {props.posts.map((post) => (
          <div key={post.id} className="posts">
            <h3>{post.title}</h3>
            <img src={post.image} alt="No Image posted"></img>
            <button onClick={() => props.onShowPost(post)}>More Info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
