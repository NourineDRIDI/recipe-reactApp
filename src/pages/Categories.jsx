import React, { useEffect, useState } from 'react'
import Title from "../components/Title";
import Loading from "../components/Loading";
import AllCategories from '../components/AllCategories';

function Categories({category}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ paddingTop: "20px" }}>
          <h3 className="text-center fw-bold fs-2">
            Make a choice and enjoy your{" "}
            <span style={{ color: "#B66055" }}>food journey </span> with us!
          </h3>
          <Title title={""} />
          <AllCategories category={category} />
        </div>
      )}
    </div>
  )
}

export default Categories
