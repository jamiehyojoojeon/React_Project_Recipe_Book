import React from 'react';
import ReactDOM from 'react-dom';
import { Link , withRouter } from 'react-router-dom';
import '../style.css';
import cajunChicken from '../images/cajun-chicken-pasta.jpg';
import bananaBread from '../images/banana-bread.jpg';
import spaghetti from '../images/spaghetti.png';
import enchiladas from '../images/enchiladas.jpg';
import recipeInfoList from './recipe-data.js';
import Recipe_Book from './recipe-main.js';

class Search extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <SearchHeader />
            </div>
        )
    }
}

class SearchHeader extends React.Component{
    constructor(props){
        super(props);
        let query = new URLSearchParams(window.location.search).get("query");
        console.log(query)
        this.state = {
            SearchText: query,
        }
    }

    newInputValue(e){
       this.setState({
           SearchText: e.target.value,
       })
    }

    EnterRecipeSearch(e){
        if(e.key === 'Enter') {
            this.SearchingForQuery(e.target.value)
        }
    }

    SearchingForQuery(query){
        this.props.history.push('/search?query='+ query);
    }

    render(){
        return(
            <header className="searchHeader">
                <div className="logo">
                    <Link to='/'>
                       <h1>Recipe Book</h1>
                    </Link>
                </div>
                <div className="search">
                    <input type="text" value={this.state.SearchText} onChange={(e) => this.newInputValue(e)} onKeyPress={(e) => this.EnterRecipeSearch(e)}></input>
                    <button onClick={() => this.SearchingForQuery(this.state.SearchText)}>
                    Click
                    </button>
                </div>
            </header>
        )
    }
}

export default withRouter(SearchHeader);