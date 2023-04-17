export function Header() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-dark bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <b>The Blog of Blogs</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#posts-index">
                All posts
              </a>
              <a class="nav-link" href="#posts-new">
                New Post
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}
