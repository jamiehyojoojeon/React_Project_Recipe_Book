import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  EnterRecipeSearch(e) {
    if (e.key === "Enter") {
      this.SearchingForQuery(e.target.value);
    }
  }

  SyncInputValue(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  SearchingForQuery(query) {
    this.props.history.push("/search?query=" + query);
  }

  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <h1>Recipe Book</h1>
          </Link>
        </div>
        <div className="welcome">
          <h2>
            We're here to help you put dinner (and breakfast and lunch) on the
            table
            <br /> with less stress and more joy.
          </h2>
        </div>
        <div className="search">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.SyncInputValue(e)}
            onKeyPress={(e) => this.EnterRecipeSearch(e)}
          ></input>
          <button onClick={() => this.SearchingForQuery(this.state.inputValue)}>
            Click
          </button>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
