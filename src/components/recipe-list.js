import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

class RecipeList extends React.Component {
  render() {
    return (
      <main>
        <div className="food-list-container">
          <div className="food-list-headline">
            <h3>Top Recipes</h3>
          </div>
          <ul className="food-list">
            {
              // Use props to pass things from parent to child
              // Use props to customize the child's behavior
              this.props.RecipeData.map((recipeInfo) => {
                return (
                  <Link to={"/recipe/" + recipeInfo.id}>
                    <li className="food-list-item">
                      <div className="food-list-img">
                        <img src={recipeInfo.thumbImage} />
                      </div>
                      <div className="food-list-name">
                        <h4>{recipeInfo.name}</h4>
                      </div>
                    </li>
                  </Link>
                );
              })
            }
          </ul>
        </div>
      </main>
    );
  }
}

export default RecipeList;
