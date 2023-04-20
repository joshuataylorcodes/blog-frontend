export function Indexpost(props) {
  return (
    <div>
      <div id="posts-index">
        <h1>Posts</h1>

        {props.posts.map((post) => (
          <div key={post.id} className="posts">
            <h3>{post.title}</h3>
            <img src={post.image} alt="No Image posted"></img>
            <div class="d-flex justify-content-center mb-5">
              <button class=" btn btn-dark d-grid" onClick={() => props.onShowPost(post)}>
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
