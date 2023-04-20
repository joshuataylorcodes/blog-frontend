export function Newpost(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
    event.target.reset();
    window.location.href = "/";
  };
  return (
    <div className="p-3 bg-info bg-opacity-10 border border-info rounded-end mb-5">
      <div id="posts-new">
        <div className="text-center">
          <h1>New post</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="input-group flex-nowrap mb-3">
            <span class="input-group-text" id="addon-wrapping">
              Title
            </span>
            <input
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
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
