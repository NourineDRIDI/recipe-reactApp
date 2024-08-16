import React, { useEffect, useState } from 'react'
import Title from "../components/Title";
import Loading from "../components/Loading";
import AllBlogs from '../components/AllBlogs';
function Blogs({myBlog, query=""}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-wrap" style={{ paddingTop: "20px" }}>
          <h3 className="text-center  fw-bold fs-2">
          Explore our diverse blog collection and enhance your{" "}
            <span style={{ color: "#B66055" }}>culinary adventures</span> with us!
          </h3>
          <Title title={""} />
          <AllBlogs myBlog={myBlog} query={query} />
        </div>
      )}
    </div>
  )
}

export default Blogs
