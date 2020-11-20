import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import cajunChicken from './images/cajun-chicken-pasta.jpg';

class Recipe_Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayRecipeList: true
        }
    }
    render() {
        return (
            <div>
                <Header />
                <RecipeList />
                <Recipe />
                <Footer />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <div class="logo">
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
                <div class="food-list-container">
                    <div class="food-list-headline">
                        <h3>Top Recipes</h3>
                    </div>
                    <ul class="food-list">
                        <li class="food-list-item">
                            <img src={cajunChicken} />
                        </li>
                        <li class="food-list-item">
                            <img src="./images/banana-bread.jpg" />
                        </li>
                        <li class="food-list-item">
                            <img src="./images/spaghetti.png" />
                        </li>
                        <li class="food-list-item">
                            <img src="./images/enchiladas.jpg" />
                        </li>
                    </ul>
                </div>
            </main>
        );
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <div class="recipe-container">
                <div class="img-container">
                    <img src="" />
                </div>
                <div class="recipe-list-container">
                    <div class="left">
                        <h2>INGREDIENTS</h2>
                    </div>
                    <div class="right">
                        <h2>DIRECTIONS</h2>
                        <p>
                            Place chicken and Cajun seasoning in a bowl and toss to coat.
                            In a large skillet over medium heat, sauté chicken in butter or margarine until chicken is tender, about 5 to 7 minutes.
                            Reduce heat add green onion, heavy cream, tomatoes, basil, salt, garlic powder, black pepper and heat through.
                            Pour over hot linguine and toss with Parmesan cheese.
                        </p>
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
