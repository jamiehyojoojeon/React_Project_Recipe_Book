import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style.css";
import recipeInfoList from "./recipe-data.js";
import RecipeList from "./recipe-list.js";

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    let query = new URLSearchParams(window.location.search).get("query");
    console.log(query);
    this.state = {
      SearchText: query,
    };
  }

  newInputValue(e) {
    this.setState({
      SearchText: e.target.value,
    });
  }

  EnterRecipeSearch(e) {
    if (e.key === "Enter") {
      this.SearchingForQuery(e.target.value);
    }
  }

  SearchingForQuery(query) {
    this.props.history.push("/search?query=" + query);
  }

  MatchRecipeDataFromSearchText(Recipe, SearchTextValue) {
    if (
      Recipe.name.toLowerCase().indexOf(SearchTextValue.toLowerCase()) !== -1
    ) {
      return true;
    }
    let splitWords = SearchTextValue.split(" ");
    for (let i = 0; i < splitWords.length; i++) {
      if (
        Recipe.name.toLowerCase().indexOf(splitWords[i].toLowerCase()) !== -1
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    let MatchRecipeList = [];
    for (let i = 0; i < recipeInfoList.length; i++) {
      if (
        this.MatchRecipeDataFromSearchText(
          recipeInfoList[i],
          this.state.SearchText
        )
      )
        MatchRecipeList.push(recipeInfoList[i]);
    }
    console.log(MatchRecipeList);

    return (
      <span>
        <header className="searchHeader">
          <div className="logo">
            <Link to="/">
              <h1>Recipe Book</h1>
            </Link>
          </div>
          <div className="search">
            <input
              type="text"
              value={this.state.SearchText}
              onChange={(e) => this.newInputValue(e)}
              onKeyPress={(e) => this.EnterRecipeSearch(e)}
            ></input>
            <button
              onClick={() => this.SearchingForQuery(this.state.SearchText)}
            >
              Click
            </button>
          </div>
        </header>
        <RecipeList RecipeData={MatchRecipeList} />
      </span>
    );
  }
}

export default withRouter(SearchHeader);
