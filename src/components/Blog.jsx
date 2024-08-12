import React from "react";
import { useNavigate } from "react-router-dom";

function Blog({  myBlog,id }) {
  const navigate = useNavigate();

  if (!myBlog) return null;

  return (
    <div className="col-md-6">
      {myBlog.image ? (
        <img
          src={myBlog.image}
          className="img-fluid p-5"
          alt={myBlog.title}
          loading="lazy"
          style={{ width: 600, height: 400 }}
          onClick={() => navigate(`/blogDetails/${myBlog.id}`)}
        />
      ) : (
        <div>No image available</div>
      )}
      <h5 className="mt-2">{myBlog.title}</h5>
      <p>{myBlog.author}</p>
    </div>
  );
}


export default Blog;
