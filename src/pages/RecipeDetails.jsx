import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RecipeDetails({ food }) {
  const [recipe, setRecipe] = useState({});


  const {id} = useParams()
  


  useEffect(()=>{
    let founded = food.find(e=>e.id===+id)
    setRecipe (founded)
  },[])



  return (
    <div className="container d-flex justify-content-center align-item-center gap-4 pb-5">
      <div className="container d-flex justify-content-center align-items-center gap-4 pb-5">
        <section className="recipe-body-1">
          <div>
            <div className="col-md-7">
              <img
                id="recipeImage"
                alt="Recipe Image"
                loading="lazy"
                className="img-fluid"
                src={recipe.image}
              />
              <h1>{recipe.name}</h1>
            </div>
            {/* <div className="d-flex align-items-center justify-content-between">
                        <p id="recipeTimes"></p>
                        <button id="printButton" className="btn btn-outline-dark text-black"><img src="../assets/icons/Print.png" alt="favorite" loading="lazy"
                            style={{"width: 20px; height: 20px;"}}/>Print Recipe</button>
                    </div>
                    <h3>Ingredients:</h3>
                    <div>
                        <form id="recipeIngredients"></form>
                    </div>
                    <div>
                        <h3>Instructions:</h3>
                        <div className="card-body" id="recipeInstructions"></div>
                    </div> */}
          </div>
          {/* <div className="container mt-5" style={{"width: 650px;"}}>
                    <div className="card p-3 b bg-body-secondary">
                        <img id="recipeCardImage" className="card-img-top" alt="Recipe Card Image"
                            style={{"width: 270px; height: 250px;"}}/>
                        <div className="card-body">
                            <h5 id="recipeCardTitle" className="card-title"></h5>
                            <p id="recipeCardAuthorDate" className="card-text"></p>
                            <p className="card-text"><small className="text-muted">Dinner, Salad</small></p>
                            <p className="card-text"><small className="text-muted">32 recipes available</small></p>
                            <div className="d-flex justify-content-between">
                                <button className="btn d-flex justify-content-center align-items-center gap-2 save-favorite"
                                    data-recipe-id="1"
                                    style={{"background-color: #B66055; border-color: #B66055; color: white;"}}>
                                    <img src="../assets/icons/Save.png" alt="favorite" loading="lazy"
                                        style={{"width: 20px; height: 20px;"}}/> Save Favorite
                                </button>
                                <button className="btn d-flex justify-content-center align-items-center gap-2 share-recipe"
                                    data-recipe-title="Sample Recipe"
                                    style={{"background-color: #B66055; border-color: #B66055; color: white;"}}>
                                    <img src="../assets/icons/Share.png" alt="favorite" loading="lazy"
                                        style={{"width: 20px; height: 20px;"}}/>Share
                                </button>
                                <button className="btn d-flex justify-content-center align-items-center gap-2 print-recipe"
                                    style={{"background-color: #B66055; border-color: #B66055; color: white;"}}>
                                    <img src="../assets/icons/Print.png" alt="favorite" loading="lazy"
                                        style={{"width: 20px; height: 20px;"}}/> Print Recipe
                                </button>
                                <a className="btn btn-outline-dark text-black" href="categories.html">More Recipes</a>
                            </div>
                            <div>
                                <h4>Ingredients:</h4>
                                <div id="recipeCardIngredients"></div>
                            </div>
                            <div>
                                <h4>Instructions:</h4>
                                <div id="recipeCardInstructions"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
        </section>
        {/* <section className="side-section">
                <div>
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title fw-bold mb-3">Nutrition Facts</h5>
                            <div className="d-flex justify-content-between">
                                <p>Calories :</p>
                                <p>80kcal</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Carbs :</p>
                                <p>10g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Fat :</p>
                                <p>4g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Protein : </p>
                                <p>2g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Fiber : </p>
                                <p>2g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Net carbs :</p>
                                <p>8g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Sugar :</p>
                                <p>4g</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p>Sodium :</p>
                                <p>444mg</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p>Cholesterol : </p>
                                <p>0mg</p>
                            </div>
                            <div>
                                <div className="border-bottom border-dark mb-4 border-opacity-25"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title">Recent Recipes</h5>
                            <div className="mb-3">
                                <a href="#">Fisherman’s Quick Fish</a>
                            </div>
                            <div className="mb-3">
                                <a href="#">Toast with Tomato, Onion, & Hummus</a>
                            </div>
                            <div className="mb-3">
                                <a href="#">Chicken Ranch Wrap</a>
                            </div>
                            <div className="mb-3">
                                <a href="#">Ham, Egg, and Spinach Roll-Ups</a>
                            </div>
                        </div>
                    </div>
                    <div className="newsletter card my-3 py-5" style={{"background-color: #FFF0ED;"}}>
                        <div className="card-body">
                            <h5 className="card-title text-center">Let's Stay In Touch!</h5>
                            <p className="text-center">Join our newsletter, so that we reach out to you with our news and
                                offers.</p>
                            <div className="d-flex justify-content-center">
                                <form id="newsletterForm" className="d-flex" action="#">
                                    <input type="email" id="email" className="form-control" placeholder="Enter Your Email"
                                        required/>
                                    <button type="submit" className="btn btn-primary ms-2"
                                        style={{background-color: "#B66055", border-color: #B66055, color: white"}}>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className="card-body d-flex flex-column justify-content-center p-3">
                            <h5 className="card-title fw-bold">Related Product</h5>
                            <img src="../assets/To buy.jpg" alt="related to buy" loading="lazy"
                                style={{"width: 400px; height: 250px;"}}/>
                            <a href="#" className="btn"
                                style={{"background-color: #B66055; border-color: #B66055; color: white;"}}>Buy
                                Now</a>
                        </div>
                    </div>
                    <div className="card my-3">
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Tags</h5>
                            <span className="badge bg-secondary">#Dessert</span>
                            <span className="badge bg-secondary">#CheeseCake</span>
                            <span className="badge bg-secondary">#FoodBlog</span>
                            <span className="badge bg-secondary">#DeliciousDesserts</span>
                            <span className="badge bg-secondary">#Baking</span>
                        </div>
                    </div>
                </div>
            </section> */}
      </div>
    </div>
  );
}

export default RecipeDetails;
