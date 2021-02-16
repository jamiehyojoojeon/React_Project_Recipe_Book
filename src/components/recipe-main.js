import React from "react";
import "../style.css";
import Header from "./header.js";
import recipeInfoList from "./recipe-data.js";
import RecipeList from "./recipe-list.js";

class Recipe_Book extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <RecipeList RecipeData={recipeInfoList} />
      </div>
    );
  }
}

export default Recipe_Book;
