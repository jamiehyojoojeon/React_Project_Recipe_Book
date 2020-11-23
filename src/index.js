import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import cajunChicken from './images/cajun-chicken-pasta.jpg';
import bananaBread from './images/banana-bread.jpg';
import spaghetti from './images/spaghetti.png';
import enchiladas from './images/enchiladas.jpg';
import recipeInfoList from './recipe-data.js';

class Recipe_Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayRecipe: false,
            recipeInfo: null,
        }
    }

    switchDisplay(recipeInfo) {
        this.setState({
            displayRecipe: !this.state.displayRecipe,
            recipeInfo: recipeInfo,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                {this.state.displayRecipe ?
                    <Recipe
                        closeRecipe={() => this.switchDisplay()}
                        recipeInfo={this.state.recipeInfo}
                    /> :
                    <RecipeList
                        showRecipe={(recipeInfo) => this.switchDisplay(recipeInfo)}
                    />}
                <Footer />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <h1>Foodie</h1>
                </div>
            </header>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>

            </footer>
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
                                    <li className="food-list-item"
                                        onClick={() => this.props.showRecipe(recipeInfo)}>
                                        <img src={recipeInfo.thumbImage} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </main>
        );
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div className="recipe-container">
                <button onClick={() => this.props.closeRecipe()}><i className="fas fa-times"></i></button>
                <h1>{this.props.recipeInfo.name}</h1>
                <div className="img-container">
                    <img src={this.props.recipeInfo.fullImage} />
                </div>
                <div className="recipe-list-container">
                    <div className="left">
                        <h2>INGREDIENTS</h2>
                        <ul className="recipe">
                            {
                                this.props.recipeInfo.ingredients.map((currentIngredient) => {
                                    return (
                                        <li>
                                            {currentIngredient}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className="right">
                        <div className="time">
                            <h2>Time</h2>
                            <p>
                                READY IN: {this.props.recipeInfo.time}
                            </p>
                        </div>
                        <div className="direction">
                            <h2>DIRECTIONS</h2>
                            {
                                this.props.recipeInfo.directions.map((currentDirection) => {
                                    return (
                                        <p>
                                            {currentDirection}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

ReactDOM.render(
    <Recipe_Book />,
    document.getElementById('root')
);
