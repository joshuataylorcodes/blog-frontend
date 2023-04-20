import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function ShowPostPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPage = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPage, []);

  return (
    <div id="posts-showpage">
      <div className="text-center mb-5">
        <h1>{post.title}</h1>
        <img src={post.image} alt="No Image posted"></img>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
