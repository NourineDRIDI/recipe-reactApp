import { useEffect, useLayoutEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "../components/Loading";
import Title from "../components/Title";
import AllRecipes from "../components/AllRecipes";
import AllCategories from "../components/AllCategories";
import Partners from "../components/Partners";
import AllBlogs from "../components/AllBlogs";
import NewsletterCard from "../components/NewsletterCard";
import chefhome from "../assets/lotties/Animation - 1723618237840.json";
import Lottie from "react-lottie";

function Home({ food, query, category, myBlog, id }) {
  const [randomRecipes, setRandomRecipes] = useState(Array(10).fill(0, 0));
  const [randomCategories, setRandomCategories] = useState(Array(8).fill(0, 0));
  const [randomBlogs, setRandomBlogs] = useState(Array(2).fill(0, 0));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useLayoutEffect(() => {
    setRandomRecipes(
      randomRecipes.map((e) => food[Math.round(Math.random() * 100)])
    );
  }, []);
  useLayoutEffect(() => {
    setRandomCategories(
      randomCategories.map((e) => category[Math.round(Math.random() * 19)])
    );
  }, []);
  useLayoutEffect(() => {
    setRandomBlogs(
      randomBlogs.map((e) => {
        let random = Math.round(Math.random() * 10);
        console.log(random, "this is the index");
        return myBlog[random];
      })
    );
  }, []);
  console.log(randomBlogs, "those are my blogs");

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ padding: 50 }} >
          <div className="d-flex flex-wrap align-items-center justify-content-around">
          
            <h1 className="fw-bold fs-1 display-4 text-center" style={{paddingLeft:40}}>
              Your Daily Dish, A
              <span className="fw-bold" style={{color: "#B66055"}}>
                Food
              </span>{" "}
              Journey!
            </h1>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: chefhome,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={250}
              width={350}
              
            />
          </div>
          <Title title={"Trending recipes"} />
          <AllRecipes food={randomRecipes} query={query} />
          <Title title={"Trending Categories"} />
          {category && category.length > 0 && (
            <AllCategories category={randomCategories} key={id} query={query} />
          )}
          <div>
            <Title title={"Blogs"} />
            {myBlog && myBlog.length > 0 ? (
              <AllBlogs myBlog={randomBlogs} query={query} />
            ) : (
              <p>No blogs available</p>
            )}
          </div>
          <Title title={"Explore our recipes"} />
          <AllRecipes food={randomRecipes} />
          <NewsletterCard />
          <Partners />
        </div>
      )}
    </div>
  );
}

export default Home;
