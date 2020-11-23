import cajunChicken from './images/cajun-chicken-pasta.jpg';
import bananaBread from './images/banana-bread.jpg';
import spaghetti from './images/spaghetti.png';
import enchiladas from './images/enchiladas.jpg';

function Recipe(name, thumbImage, fullImage, ingredients, time, directions) {
    this.name = name;
    this.thumbImage = thumbImage;
    this.fullImage = fullImage;
    this.ingredients = ingredients;
    this.time = time;
    this.directions = directions;
}

const recipeInfoList = [
    new Recipe(
        "CREAMY CAJUN CHICKEN PASTA",
        cajunChicken,
        cajunChicken,
        [
            "2 boneless skinless chicken breast halves, cut into thin strips",
            "4 ounces linguine, cooked al dente",
            "2 teaspoons cajun seasoning (your recipe, Cajun Seasoning Mix or store-bought)",
            "2 tablespoons butter",
            "1 thinly sliced green onion",
            "1⁄2 cup heavy whipping cream",
            "2 tablespoons chopped sun-dried tomatoes",
            "1⁄4 teaspoon salt",
            "1⁄4 teaspoon dried basil",
            "1⁄8 teaspoon ground black pepper",
            "1⁄8 teaspoon garlic powder"
        ],
        "25mins",
        [
            "Place chicken and Cajun seasoning in a bowl and toss to coat.",
            "In a large skillet over medium heat, sauté chicken in butter or margarine until chicken is tender, about 5 to 7 minutes.",
            "Reduce heat add green onion, heavy cream, tomatoes, basil, salt, garlic powder, black pepper and heat through.",
            "Pour over hot linguine and toss with Parmesan cheese."
        ]
    ),
    new Recipe(
        "BEST BANANA BREAD",
        bananaBread,
        bananaBread,
        [
            "1⁄2 cup butter, softened",
            "1cup granulated sugar",
            "2 eggs, beaten",
            "3 bananas, finely crushed (for serious and extreme moist and delicious, try 4 bananas)",
            "1 1⁄2 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1⁄2 teaspoon salt",
            "1⁄2 teaspoon vanilla (optional)"
        ],
        "1hr 10mins",
        [
            "Remove odd pots and pans from oven.",
            "Preheat oven to 350º / 180º.",
            "Cream together butter and sugar.",
            "Add eggs and crushed bananas.",
            "Sift together flour, soda and salt. Add to creamed mixture. Add vanilla.",
            "Mix just until combined. Do not overmix.",
            "Pour into greased and floured loaf pan.",
            "Bake at 350º / 180º for 55 minutes.",
            "Keeps well, refrigerated."
        ]
    ),
    new Recipe(
        "WORLD FAMOUS SPAGHETTI",
        spaghetti,
        spaghetti,
        [
            "2 lbs Italian sausage, casings removed (mild or hot)",
            "1 small onion, chopped (optional)",
            "3 garlic cloves, minced",
            "1 (28 ounce) can diced tomatoes",
            "2 (6 ounce) cans tomato paste",
            "2 (15 ounce) cans tomato sauce",
            "2 cups water",
            "3 teaspoons basil",
            "2 teaspoons dried parsley flakes",
            "1 teaspoon brown sugar",
            "1 teaspoon salt",
            "1 lb thin spaghetti"
        ],
        "1hr 20mins",
        [
            "In large, heavy stockpot, brown Italian sausage, breaking up as you stir.",
            "Add onions and continue to cook, stirring occasionally until onions are softened.",
            "Add garlic, tomatoes, tomato paste, tomato sauce and water.",
            "Add basil, parsley, brown sugar, salt, crushed red pepper, and black pepper.",
            "Stir well and barely bring to a boil.",
            "Simmer on low, stirring frequently for at least an hour.",
            "Cook spaghetti according to package directions.",
            "Spoon sauce over drained spaghetti noodles and sprinkle with parmesan cheese."
        ]
    ),
    new Recipe(
        "SOUR CREAM CHICKEN ENCHILADAS",
        enchiladas,
        enchiladas,
        [
            "1 lb chicken breast, diced",
            "1 medium onion, minced",
            "1 tablespoon vegetable oil",
            "8 (8 inch) flour tortillas, softened",
            "1 cups grated monterey jack cheese or 1 1/2 cups Mexican blend cheese, divided",
            "1 cup butter",
            "1 cup flour",
            "1 (15 ounce) can chicken broth",
            "1 cup sour cream",
            "1 (4 ounce) can chopped green chilies or 2 fresh chili peppers, minced"
        ],
        "45mins",
        [
            "In a frying pan, cook chicken and onion together in oil over medium-high heat until chicken is just done.",
            "Divide cooked chicken evenly between 8 tortillas; add 1 1/2 tablespoons cheese to each tortilla.",
            "Roll enchiladas and place seam-side down in a 9x13 baking dish that has been lightly sprayed with no-stick cooking spray.",
            "Melt butter in a medium saucepan; stir in flour to make a roux, stir and cook until bubbly, and gradually whisk in chicken broth then bring to boiling, stirring frequently.",
            "Remove from heat; stir in sour cream and green chilies.",
            "Pour sauce evenly over enchiladas.",
            "Top with remaining 3/4 cup cheese (a baking dish may be double-wrapped and frozen at this point) and bake at 400° F for 20 minutes until cheese is melted and sauce near edges of baking dish is bubbly."
        ]
    )
]

export default recipeInfoList;