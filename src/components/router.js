import React from "react";
import { Route, Switch } from "react-router-dom";
import Recipe_Book from "./recipe-main";
import Search from "./search";
import Recipe from "./recipe";

class Router extends React.Component {
  render() {
    return (
      <span>
        <Switch>
          <Route exact path="/" component={Recipe_Book} />
          <Route exact path="/search" component={Search} />
          <Route path="/recipe/:recipeID" component={Recipe} />
        </Switch>
      </span>
    );
  }
}

export default Router;
