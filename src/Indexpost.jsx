import { useState } from "react";

export function Indexpost(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div id="posts-index">
        <h1>All Posts</h1>
        Search Filter:
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          list="titles"
        />
        <datalist id="titles">
          {props.posts.map((post) => (
            <option key={post.id} value={post.title} />
          ))}
        </datalist>
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
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
