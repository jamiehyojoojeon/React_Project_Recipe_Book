import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../style.css';
import Header from './header.js'
import recipeInfoList from './recipe-data.js';

class Recipe_Book extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <RecipeList />
            </div>
        );
    }
}



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
                            recipeInfoList.map((recipeInfo) => {
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
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        );
    }
}

export default Recipe_Book;
