import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //const to store recipe from recipeCreate
  const [recipes, setRecipes] = useState(RecipeData);

  //getting input info to father
  const addRecipe = (data) => 
    setRecipes([...recipes, data]);

    //delete option for each post
    function deleteRecipe(targetIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== targetIndex))
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate  
        addRecipe={addRecipe}
      />
    </div>
  );
}

export default App;

