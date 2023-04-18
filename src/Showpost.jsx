import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch("http://localhost:3000/posts/" + props.post.id + ".json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div class="p-3 bg-info bg-opacity-10 border border-info rounded-end mb-5">
      <div id="posts-=show">
        <div className="text-center mb-5">
          <h1>{props.post.title}</h1>
          <p>{props.post.body}</p>
        </div>

        <div>
          <h3>Update Post</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Title
            </span>
            <input
              defaultValue={props.post.title}
              name="title"
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Title"
              aria-describedby="addon-wrapping"
            />
          </div>

          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Body
            </span>
            <input
              defaultValue={props.post.body}
              name="body"
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Body"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-info" type="button" id="button-addon1">
              Upload Image
            </button>
            <input
              defaultValue={props.post.image}
              name="image"
              type="text"
              class="form-control"
              placeholder="image url"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark d-grid">
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
