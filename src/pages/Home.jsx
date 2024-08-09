import { useEffect, useLayoutEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../components/Loading";
import Title from "../components/Title";
import AllRecipes from "../components/AllRecipes";
import AllCategories from "../components/AllCategories";
import { Link } from "react-router-dom";
import Partners from "../components/Partners";

function Home({food,query,category}) {
  const [randomRecipes, setRandomRecipes] =useState(Array(10).fill(0,0))
  const [loading, setLoading] = useState(true);
  
  
  

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  
useLayoutEffect(()=>{
  setRandomRecipes(randomRecipes.map(e=>food[Math.round(Math.random()*100)]))},[])
  return (
  
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ padding:35 }}>
          <Title title={"Trending recipes"} />
          <AllRecipes food={randomRecipes} query={query} />
          <Title title={"Trending Categories"} />
          {category && category.length > 0 && 
            <AllCategories category={category} />
          }
          <Title title={"Blogs"} />
          <Title title={"Trending recipes"} />
          <AllRecipes food={randomRecipes}/>
          <Link to="/addrecipe">Add a New Recipe</Link>
          <Partners/>
        </div>)}
    </div>    
  )
}


export default Home;
