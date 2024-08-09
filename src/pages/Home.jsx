import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../components/Loading";
import Title from "../components/Title";
import AllRecipes from "../components/AllRecipes";
import AllCategories from "../components/AllCategories";

function Home({food,query,category}) {
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
          <Title title={"Trending recipes"} />
          <AllRecipes food={food} query={query} />
          <Title title={"Trending Categories"} />
          {category && category.length > 0 ? (
            <AllCategories category={category} />
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      )}
    </div>
  );
}


export default Home;
