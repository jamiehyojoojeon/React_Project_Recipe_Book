import React from "react";
import recipeInfoList from "./recipe-data";
import { Link } from "react-router-dom";
import "../style.css";

class Recipe extends React.Component {
  render() {
    let recipeID = this.props.match.params.recipeID;
    let recipeObj = null;
    for (let i = 0; i < recipeInfoList.length; i++) {
      let currentRecipe = recipeInfoList[i];
      if (recipeID === currentRecipe.id) {
        recipeObj = currentRecipe;
        break;
      }
    }

    return (
      <div className="recipe-container">
        <button>
          <Link to="/">
            <i className="fas fa-long-arrow-alt-left"></i>
          </Link>
        </button>
        <h1>{recipeObj.name}</h1>
        <div className="img-container">
          <img src={recipeObj.fullImage} />
        </div>
        <div className="recipe-list-container">
          <div className="left">
            <h2>INGREDIENTS</h2>
            <ul className="recipe">
              {recipeObj.ingredients.map((currentIngredient) => {
                return <li>{currentIngredient}</li>;
              })}
            </ul>
          </div>
          <div className="right">
            <div className="time">
              <h2>Time</h2>
              <p>READY IN: {recipeObj.time}</p>
            </div>
            <div className="direction">
              <h2>DIRECTIONS</h2>
              {recipeObj.directions.map((currentDirection) => {
                return <p>{currentDirection}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
