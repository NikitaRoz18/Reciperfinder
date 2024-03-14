window.onload = () => {
    document.getElementById('form_section').style.display = 'block';
    document.getElementById('recipe_section').style.display = 'none';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'none';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('image_book').style.display = 'none';
    document.getElementById('image_chicken').style.display = 'none';
    document.getElementById('image_carrot').style.display = 'none';



}

function Ingredient() {
    let ingredient = document.getElementById('ingredient').value.toLowerCase();
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    let validInput = true; // Flag to check if input is valid
    
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
    
    if (ingredient.length > 0) { // Corrected condition for checking input length
        if (ingredient.startsWith("t")) {
            // Display appropriate image and hide others
            document.getElementById('image_tomato').style.display = 'block';
            document.getElementById('image_potato').style.display = 'none';
            document.getElementById('image_onion').style.display = 'none';
            document.getElementById('buttons').style.display = 'none';
            document.getElementById('image_book').style.display = 'none';
            document.getElementById('image_egg').style.display = 'none';
            document.getElementById('image_chicken').style.display = 'none';
            document.getElementById('image_carrot').style.display = 'none';

            let recipe_title = "Tomato Basil Pasta";
            recipe = "- 8 oz (about 225g) pasta (penne, spaghetti, or your choice)\n" +
                "- 2 tablespoons olive oil\n" +
                "- 4 cloves garlic, minced\n" +
                "- 1 can (14.5 oz) diced tomatoes\n" +
                "- 1/4 cup tomato paste\n" +
                "- 1/2 teaspoon red pepper flakes (optional, adjust to taste)\n" +
                "- Salt and pepper to taste\n" +
                "- 1/4 cup chopped fresh basil leaves\n" +
                "- Grated Parmesan cheese for serving (optional)\n\n" +
                "Instructions:\n\n" +
                "1. Cook the pasta according to the package instructions until al dente. Drain and set aside.\n" +
                "2. In a large skillet, heat the olive oil over medium heat. Add the minced garlic and cook for about 1 minute, until fragrant.\n" +
                "3. Add the diced tomatoes (with their juices) and tomato paste to the skillet. Stir well to combine.\n" +
                "4. Season the sauce with red pepper flakes (if using), salt, and pepper to taste. Allow the sauce to simmer for about 10 minutes, stirring occasionally, until it thickens slightly.\n" +
                "5. Once the sauce has thickened, add the cooked pasta to the skillet. Toss the pasta with the sauce until evenly coated.\n" +
                "6. Remove the skillet from the heat and stir in the chopped fresh basil leaves.\n" +
                "7. Serve the tomato basil pasta hot, garnished with grated Parmesan cheese if desired.\n\n" +
                "Enjoy your delicious tomato basil pasta!";
            recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
            recipelist.innerHTML = `<p>${recipe}</p>`;
        } else if (ingredient.startsWith("p")) {
            // Display appropriate image and hide others
            document.getElementById('image_tomato').style.display = 'none';
            document.getElementById('image_potato').style.display = 'block';
            document.getElementById('image_onion').style.display = 'none';
            document.getElementById('buttons').style.display = 'none';
            document.getElementById('image_book').style.display = 'none';
            document.getElementById('image_egg').style.display = 'none';
            document.getElementById('image_chicken').style.display = 'none';
            document.getElementById('image_carrot').style.display = 'none';

            let recipe_title = "Potato and Bacon Hash";
            recipe = "- 4 large potatoes, peeled and diced into 1/2-inch cubes\n" +
                "- 6 slices of bacon, chopped\n" +
                "- 1 onion, finely chopped\n" +
                "- 1 bell pepper, diced\n" +
                "- 2 cloves garlic, minced\n" +
                "- 1 teaspoon paprika\n" +
                "- Salt and pepper to taste\n" +
                "- 2 tablespoons olive oil\n" +
                "- 2 tablespoons chopped fresh parsley (optional, for garnish)\n" +
                "- Fried or poached eggs (optional, for serving)\n\n" +
                "Instructions:\n\n" +
                "1. Place the diced potatoes in a large pot of salted water. Bring to a boil and cook for about 5-7 minutes, or until the potatoes are just tender. Drain and set aside.\n" +
                "2. In a large skillet, cook the chopped bacon over medium heat until crispy. Remove the bacon from the skillet and drain on paper towels, leaving the bacon drippings in the skillet.\n" +
                "3. Add the olive oil to the skillet with the bacon drippings. Add the chopped onion and bell pepper to the skillet and cook for about 5 minutes, or until softened.\n" +
                "4. Add the minced garlic to the skillet and cook for an additional 1-2 minutes, until fragrant.\n" +
                "5. Increase the heat to medium-high and add the parboiled diced potatoes to the skillet. Spread them out in an even layer and let them cook without stirring for a few minutes to allow them to brown on one side. Then stir and continue cooking for another 5-7 minutes, stirring occasionally, until the potatoes are golden and crispy on the outside.\n" +
                "6. Sprinkle the paprika over the potatoes and season with salt and pepper to taste. Stir well to combine.\n" +
                "7. Return the cooked bacon to the skillet and toss everything together until evenly mixed.\n" +
                "8. Remove the skillet from the heat and sprinkle with chopped fresh parsley if using.\n" +
                "9. Serve the potato and bacon hash hot, with fried or poached eggs on top if desired.\n\n" +
                "Enjoy your hearty and delicious potato and bacon hash!";
            recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
            recipelist.innerHTML = `<p>${recipe}</p>`;
        } else if (ingredient.startsWith("o")) {
            // Display appropriate image and hide others
            document.getElementById('image_tomato').style.display = 'none';
            document.getElementById('image_potato').style.display = 'none';
            document.getElementById('image_onion').style.display = 'block';
            document.getElementById('buttons').style.display = 'none';
            document.getElementById('image_book').style.display = 'none';
            document.getElementById('image_egg').style.display = 'none';
            document.getElementById('image_chicken').style.display = 'none';
            document.getElementById('image_carrot').style.display = 'none';

            let recipe_title = "Onion Tomato Pasta";
            recipe = "- 8 oz (about 225g) pasta (penne, spaghetti, or your choice)\n" +
                "- 2 tablespoons olive oil\n" +
                "- 1 onion, finely chopped\n" +
                "- 4 cloves garlic, minced\n" +
                "- 1 can (14.5 oz) diced tomatoes\n" +
                "- 1/4 cup tomato paste\n" +
                "- 1/2 teaspoon red pepper flakes (optional, adjust to taste)\n" +
                "- Salt and pepper to taste\n" +
                "- 1/4 cup chopped fresh basil leaves\n" +
                "- Grated Parmesan cheese for serving (optional)\n\n" +
                "Instructions:\n\n" +
                "1. Cook the pasta according to the package instructions until al dente. Drain and set aside.\n" +
                "2. In a large skillet, heat the olive oil over medium heat. Add the chopped onion and cook for about 5 minutes, until softened and translucent.\n" +
                "3. Add the minced garlic to the skillet and cook for another 1-2 minutes, until fragrant.\n" +
                "4. Add the diced tomatoes (with their juices) and tomato paste to the skillet. Stir well to combine.\n" +
                "5. Season the sauce with red pepper flakes (if using), salt, and pepper to taste. Allow the sauce to simmer for about 10 minutes, stirring occasionally, until it thickens slightly.\n" +
                "6. Once the sauce has thickened, add the cooked pasta to the skillet. Toss the pasta with the sauce until evenly coated.\n" +
                "7. Remove the skillet from the heat and stir in the chopped fresh basil leaves.\n" +
                "8. Serve the tomato basil pasta hot, garnished with grated Parmesan cheese if desired.\n\n" +
                "Enjoy your flavorful tomato basil pasta with onion!";
            recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
            recipelist.innerHTML = `<p>${recipe}</p>`;
        } else {
            // If input doesn't match any expected ingredient
            validInput = false;
        }
    } else {
        // If no input is provided
        validInput = false;
    }
    
    if (!validInput) {
        // Display appropriate image and message if input is invalid
        document.getElementById('image_tomato').style.display = 'none';
        document.getElementById('image_potato').style.display = 'none';
        document.getElementById('image_onion').style.display = 'none';
        document.getElementById('image_book').style.display = 'block';
        document.getElementById('buttons').style.display = 'block';
        document.getElementById('image_egg').style.display = 'none';
        document.getElementById('image_chicken').style.display = 'none';
        document.getElementById('image_carrot').style.display = 'none';

        recipelist.innerHTML = "<li>Please try again.</li>";
    }
}

function Goback() {
    document.getElementById('form_section').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('recipe_section').style.display = 'none';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'none';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('image_egg').style.display = 'none';
    document.getElementById('image_chicken').style.display = 'none';
    document.getElementById('image_carrot').style.display = 'none';



}



function Tomato() {
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
        document.getElementById('form_section').style.display = 'none';
        document.getElementById('recipe_section').style.display = 'block';
        document.getElementById('image_tomato').style.display = 'block';
        document.getElementById('image_potato').style.display = 'none';
        document.getElementById('image_onion').style.display = 'none';
        document.getElementById('image_egg').style.display = 'none';
        document.getElementById('image_chicken').style.display = 'none';
        document.getElementById('image_carrot').style.display = 'none';



        let recipe_title = "Tomato Basil Pasta";
        recipe = "- 8 oz (about 225g) pasta (penne, spaghetti, or your choice)\n" +
            "- 2 tablespoons olive oil\n" +
            "- 4 cloves garlic, minced\n" +
            "- 1 can (14.5 oz) diced tomatoes\n" +
            "- 1/4 cup tomato paste\n" +
            "- 1/2 teaspoon red pepper flakes (optional, adjust to taste)\n" +
            "- Salt and pepper to taste\n" +
            "- 1/4 cup chopped fresh basil leaves\n" +
            "- Grated Parmesan cheese for serving (optional)\n\n" +
            "Instructions:\n\n" +
            "1. Cook the pasta according to the package instructions until al dente. Drain and set aside.\n" +
            "2. In a large skillet, heat the olive oil over medium heat. Add the minced garlic and cook for about 1 minute, until fragrant.\n" +
            "3. Add the diced tomatoes (with their juices) and tomato paste to the skillet. Stir well to combine.\n" +
            "4. Season the sauce with red pepper flakes (if using), salt, and pepper to taste. Allow the sauce to simmer for about 10 minutes, stirring occasionally, until it thickens slightly.\n" +
            "5. Once the sauce has thickened, add the cooked pasta to the skillet. Toss the pasta with the sauce until evenly coated.\n" +
            "6. Remove the skillet from the heat and stir in the chopped fresh basil leaves.\n" +
            "7. Serve the tomato basil pasta hot, garnished with grated Parmesan cheese if desired.\n\n" +
            "Enjoy your delicious tomato basil pasta!";
        recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
        recipelist.innerHTML = `<p>${recipe}</p>`;
    }
function Onion(){
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
        document.getElementById('image_tomato').style.display = 'none';
        document.getElementById('image_potato').style.display = 'none';
        document.getElementById('image_onion').style.display = 'block';
        document.getElementById('buttons').style.display = 'none';
        document.getElementById('image_book').style.display = 'none';
        document.getElementById('image_egg').style.display = 'none';
        document.getElementById('image_chicken').style.display = 'none';
        document.getElementById('image_carrot').style.display = 'none';





        let recipe_title = "Onion Tomato Pasta";
        recipe = "- 8 oz (about 225g) pasta (penne, spaghetti, or your choice)\n" +
            "- 2 tablespoons olive oil\n" +
            "- 1 onion, finely chopped\n" +
            "- 4 cloves garlic, minced\n" +
            "- 1 can (14.5 oz) diced tomatoes\n" +
            "- 1/4 cup tomato paste\n" +
            "- 1/2 teaspoon red pepper flakes (optional, adjust to taste)\n" +
            "- Salt and pepper to taste\n" +
            "- 1/4 cup chopped fresh basil leaves\n" +
            "- Grated Parmesan cheese for serving (optional)\n\n" +
            "Instructions:\n\n" +
            "1. Cook the pasta according to the package instructions until al dente. Drain and set aside.\n" +
            "2. In a large skillet, heat the olive oil over medium heat. Add the chopped onion and cook for about 5 minutes, until softened and translucent.\n" +
            "3. Add the minced garlic to the skillet and cook for another 1-2 minutes, until fragrant.\n" +
            "4. Add the diced tomatoes (with their juices) and tomato paste to the skillet. Stir well to combine.\n" +
            "5. Season the sauce with red pepper flakes (if using), salt, and pepper to taste. Allow the sauce to simmer for about 10 minutes, stirring occasionally, until it thickens slightly.\n" +
            "6. Once the sauce has thickened, add the cooked pasta to the skillet. Toss the pasta with the sauce until evenly coated.\n" +
            "7. Remove the skillet from the heat and stir in the chopped fresh basil leaves.\n" +
            "8. Serve the tomato basil pasta hot, garnished with grated Parmesan cheese if desired.\n\n" +
            "Enjoy your flavorful tomato basil pasta with onion!";
        recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
        recipelist.innerHTML = `<p>${recipe}</p>`;
}
function Potato(){
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'block';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('image_book').style.display = 'none';
    document.getElementById('image_egg').style.display = 'none';
    document.getElementById('image_chicken').style.display = 'none';
    document.getElementById('image_carrot').style.display = 'none';



        let recipe_title = "Potato and Bacon Hash";
        recipe = "- 4 large potatoes, peeled and diced into 1/2-inch cubes\n" +
            "- 6 slices of bacon, chopped\n" +
            "- 1 onion, finely chopped\n" +
            "- 1 bell pepper, diced\n" +
            "- 2 cloves garlic, minced\n" +
            "- 1 teaspoon paprika\n" +
            "- Salt and pepper to taste\n" +
            "- 2 tablespoons olive oil\n" +
            "- 2 tablespoons chopped fresh parsley (optional, for garnish)\n" +
            "- Fried or poached eggs (optional, for serving)\n\n" +
            "Instructions:\n\n" +
            "1. Place the diced potatoes in a large pot of salted water. Bring to a boil and cook for about 5-7 minutes, or until the potatoes are just tender. Drain and set aside.\n" +
            "2. In a large skillet, cook the chopped bacon over medium heat until crispy. Remove the bacon from the skillet and drain on paper towels, leaving the bacon drippings in the skillet.\n" +
            "3. Add the olive oil to the skillet with the bacon drippings. Add the chopped onion and bell pepper to the skillet and cook for about 5 minutes, or until softened.\n" +
            "4. Add the minced garlic to the skillet and cook for an additional 1-2 minutes, until fragrant.\n" +
            "5. Increase the heat to medium-high and add the parboiled diced potatoes to the skillet. Spread them out in an even layer and let them cook without stirring for a few minutes to allow them to brown on one side. Then stir and continue cooking for another 5-7 minutes, stirring occasionally, until the potatoes are golden and crispy on the outside.\n" +
            "6. Sprinkle the paprika over the potatoes and season with salt and pepper to taste. Stir well to combine.\n" +
            "7. Return the cooked bacon to the skillet and toss everything together until evenly mixed.\n" +
            "8. Remove the skillet from the heat and sprinkle with chopped fresh parsley if using.\n" +
            "9. Serve the potato and bacon hash hot, with fried or poached eggs on top if desired.\n\n" +
            "Enjoy your hearty and delicious potato and bacon hash!";
        recipeheader.innerHTML = `<h3>${recipe_title}</h3>`;
        recipelist.innerHTML = `<p>${recipe}</p>`;
}
function Egg(){
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'none';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('image_book').style.display = 'none';
    document.getElementById('image_egg').style.display = 'block';
    document.getElementById('image_chicken').style.display = 'none';
    document.getElementById('image_carrot').style.display = 'none';


    let recipe_title = "Delicious Scrambled Eggs";
    recipe = "Ingredients:\n\n" +
             "- 3 large eggs\n" +
             "- 1 tablespoon butter or cooking oil\n" +
             "- Salt and pepper to taste\n" +
             "- Optional: chopped fresh herbs (such as chives, parsley, or dill) or grated cheese\n\n" +
             "Instructions:\n\n" +
             "1. Crack the eggs into a bowl and whisk them together until well combined. Season with salt and pepper to taste.\n" +
             "2. Heat the butter or cooking oil in a non-stick skillet over medium heat until melted and hot.\n" +
             "3. Pour the beaten eggs into the skillet and let them cook undisturbed for a few seconds until the edges start to set.\n" +
             "4. Using a spatula, gently push the cooked edges toward the center of the skillet, allowing the uncooked eggs to flow to the edges.\n" +
             "5. Continue cooking and gently stirring occasionally until the eggs are mostly set but still slightly runny.\n" +
             "6. If desired, sprinkle chopped fresh herbs or grated cheese over the eggs and gently fold them in.\n" +
             "7. Cook for another minute or so, until the eggs are fully cooked but still soft and creamy.\n" +
             "8. Remove the scrambled eggs from the heat and serve immediately.\n\n" +
             "Enjoy your delicious scrambled eggs!";

document.getElementById("recipeheader").innerHTML = `<h3>${recipe_title}</h3>`;
document.getElementById("recipelist").innerHTML = `<p>${recipe}</p>`;


}

function Chicken(){
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'none';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('image_book').style.display = 'none';
    document.getElementById('image_egg').style.display = 'none';
    document.getElementById('image_chicken').style.display = 'block';
    document.getElementById('image_carrot').style.display = 'none';

    let recipe_title = "Herb-Roasted Chicken";
    recipe = "Ingredients:\n\n" +
             "- 1 whole chicken (about 3-4 pounds)\n" +
             "- 2 tablespoons olive oil\n" +
             "- 2 cloves garlic, minced\n" +
             "- 1 tablespoon fresh thyme leaves (or 1 teaspoon dried thyme)\n" +
             "- 1 tablespoon fresh rosemary leaves (or 1 teaspoon dried rosemary)\n" +
             "- 1 tablespoon fresh sage leaves (or 1 teaspoon dried sage)\n" +
             "- Salt and pepper to taste\n" +
             "- 1 lemon, halved\n" +
             "- 1 onion, quartered\n" +
             "- 2 carrots, chopped into large chunks\n" +
             "- 2 stalks celery, chopped into large chunks\n\n" +
             "Instructions:\n\n" +
             "1. Preheat your oven to 425°F (220°C).\n" +
             "2. Rinse the chicken inside and out under cold running water and pat dry with paper towels. Place the chicken on a cutting board and tuck the wing tips under the body.\n" +
             "3. In a small bowl, mix together the olive oil, minced garlic, thyme, rosemary, sage, salt, and pepper to form a paste.\n" +
             "4. Rub the herb paste all over the chicken, including under the skin and inside the cavity.\n" +
             "5. Place the lemon halves, onion quarters, carrots, and celery in the bottom of a roasting pan or large oven-proof skillet.\n" +
             "6. Place the seasoned chicken on top of the vegetables in the pan.\n" +
             "7. Roast the chicken in the preheated oven for about 1 hour and 15 minutes to 1 hour and 30 minutes, or until the internal temperature reaches 165°F (75°C) and the juices run clear when pierced with a fork.\n" +
             "8. Once cooked, remove the chicken from the oven and let it rest for 10-15 minutes before carving.\n" +
             "9. Carve the chicken and serve with the roasted vegetables.\n\n" +
             "Enjoy your flavorful herb-roasted chicken!";
             
document.getElementById("recipeheader").innerHTML = `<h3>${recipe_title}</h3>`;
document.getElementById("recipelist").innerHTML = `<p>${recipe}</p>`;

}
function Carrot(){
    let recipelist = document.getElementById('recipelist');
    let recipeheader = document.getElementById('recipeheader');
    let recipe = "";
    document.getElementById('form_section').style.display = 'none';
    document.getElementById('recipe_section').style.display = 'block';
    document.getElementById('image_tomato').style.display = 'none';
    document.getElementById('image_potato').style.display = 'none';
    document.getElementById('image_onion').style.display = 'none';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('image_book').style.display = 'none';
    document.getElementById('image_egg').style.display = 'none';
    document.getElementById('image_chicken').style.display = 'none';
    document.getElementById('image_carrot').style.display = 'block';
    let recipe_title = "Honey Glazed Roasted Carrots";
 recipe = "Ingredients:\n\n" +
             "- 1 pound carrots, peeled and sliced into sticks\n" +
             "- 2 tablespoons olive oil\n" +
             "- 2 tablespoons honey\n" +
             "- 1 tablespoon balsamic vinegar\n" +
             "- 1 teaspoon fresh thyme leaves (or 1/2 teaspoon dried thyme)\n" +
             "- Salt and pepper to taste\n" +
             "- Chopped fresh parsley (optional, for garnish)\n\n" +
             "Instructions:\n\n" +
             "1. Preheat your oven to 400°F (200°C).\n" +
             "2. In a large bowl, toss the carrot sticks with olive oil, honey, balsamic vinegar, thyme, salt, and pepper until evenly coated.\n" +
             "3. Spread the carrots in a single layer on a baking sheet lined with parchment paper or aluminum foil.\n" +
             "4. Roast the carrots in the preheated oven for about 20-25 minutes, or until they are tender and caramelized, stirring halfway through.\n" +
             "5. Once roasted, remove the carrots from the oven and transfer them to a serving dish.\n" +
             "6. Garnish with chopped fresh parsley if desired.\n" +
             "7. Serve the honey glazed roasted carrots as a delicious side dish.\n\n" +
             "Enjoy your sweet and flavorful roasted carrots!";
             
document.getElementById("recipeheader").innerHTML = `<h3>${recipe_title}</h3>`;
document.getElementById("recipelist").innerHTML = `<p>${recipe}</p>`;

}