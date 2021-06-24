var selected = [];
var groups = {
    'Preserves':['Tomato Jam'],
'Camping':[],
'Gluten-Free':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Granny’s Spiced Nuts','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Misir Wat','Roasted Broccoli with Parmesan','Sesame Spinach Salad','Crispy Baked Tofu','Apricot Lentil Soup','Watermelon Italian Ice','Garam Masala','Thai Peanut Sauce','Teriyaki Sauce','Roasted Japanese Sweet Potato','Taco Seasoning','Mango Lassi','Chickpea and Avocado Salad','Thai Green Curry','Niter Kibbeh','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Sweet and Sour Chicken Wings','Ribbon Salad','Bulgogi','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Black Bean Butternut Squash Enchilada Casserole','Navratan Korma','Thai Salad','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','Fried Rice','BBQ Jackfruit','Atkilt','Kheer','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Indian':['Garam Masala','Mango Lassi','Navratan Korma','Kheer'],
'Korean':['Sesame Spinach Salad','Bulgogi'],
'Dessert':['Granny’s Spiced Nuts','Watermelon Italian Ice','Ribbon Salad','Mango Sticky Rice','Kheer'],
'Vegan':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Misir Wat','Roasted Broccoli with Parmesan','Crispy Baked Tofu','Apricot Lentil Soup','Thai Peanut Sauce','Roasted Japanese Sweet Potato','Taco Seasoning','Thai Green Curry','Mango Sticky Rice','Crispy Roasted Potatoes','Atkilt','Gomen Wat','Thai Sweet Potato Curry','Tomato Jam'],
'Nut-Free':['Coconut Lime Rice','Roasted Brussel Sprouts','Cinnamon Coffee Cake Muffins','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Misir Wat','Roasted Broccoli with Parmesan','Sesame Spinach Salad','Crispy Baked Tofu','Apricot Lentil Soup','Watermelon Italian Ice','Garam Masala','Teriyaki Sauce','Roasted Japanese Sweet Potato','Taco Seasoning','French Onion Soup','Mango Lassi','Chickpea and Avocado Salad','Thai Green Curry','Niter Kibbeh','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Sweet and Sour Chicken Wings','Ribbon Salad','Bulgogi','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Black Bean Butternut Squash Enchilada Casserole','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','Fried Rice','BBQ Jackfruit','Atkilt','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Sesame-Free':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Granny’s Spiced Nuts','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Misir Wat','Roasted Broccoli with Parmesan','Crispy Baked Tofu','Apricot Lentil Soup','Watermelon Italian Ice','Garam Masala','Taco Seasoning','French Onion Soup','Mango Lassi','Chickpea and Avocado Salad','Thai Green Curry','Niter Kibbeh','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Sweet and Sour Chicken Wings','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Black Bean Butternut Squash Enchilada Casserole','Navratan Korma','Thai Salad','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','Fried Rice','BBQ Jackfruit','Atkilt','Kheer','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Sides':['Roasted Brussel Sprouts','Cranberry Salad','Roasted Broccoli with Parmesan','Crispy Roasted Potatoes','Atkilt','Gomen Wat'],
'Family Recipes':['Granny’s Spiced Nuts','Cranberry Salad','Sweet and Sour Chicken Wings','Ribbon Salad','Bulgogi','Fried Rice'],
'Baking':['Cinnamon Coffee Cake Muffins','Sweet and Moist Cornbread'],
'Nick-Safe':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Roasted Broccoli with Parmesan','Sesame Spinach Salad','Crispy Baked Tofu','Watermelon Italian Ice','Garam Masala','Teriyaki Sauce','Taco Seasoning','French Onion Soup','Mango Lassi','Thai Green Curry','Niter Kibbeh','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Sweet and Sour Chicken Wings','Ribbon Salad','Bulgogi','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','Fried Rice','BBQ Jackfruit','Atkilt','Kheer','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Soups':['Apricot Lentil Soup','French Onion Soup'],
'Vegetarian':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Misir Wat','Roasted Broccoli with Parmesan','Sesame Spinach Salad','Crispy Baked Tofu','Apricot Lentil Soup','Watermelon Italian Ice','Garam Masala','Thai Peanut Sauce','Teriyaki Sauce','Roasted Japanese Sweet Potato','Taco Seasoning','Mango Lassi','Chickpea and Avocado Salad','Thai Green Curry','Niter Kibbeh','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Black Bean Butternut Squash Enchilada Casserole','Navratan Korma','Thai Salad','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','BBQ Jackfruit','Atkilt','Kheer','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Thanksgiving':['Cranberry Salad','Ribbon Salad'],
'Dinner':['Coconut Lime Rice','Penne with Squash and Goat Cheese','Macaroni and Cheese','Misir Wat','Crispy Baked Tofu','Apricot Lentil Soup','Thai Green Curry','Sweet and Sour Chicken Wings','Bulgogi','Black Bean Butternut Squash Enchilada Casserole','Navratan Korma','Fried Rice','BBQ Jackfruit','Sweet and Moist Cornbread','Thai Sweet Potato Curry'],
'Spices':['Garam Masala','Taco Seasoning','Niter Kibbeh','Thai Curry Paste','Berbere (Ethiopian spice mix)'],
'Thai':['Thai Peanut Sauce','Thai Green Curry','Mango Sticky Rice','Thai Curry Paste','Thai Salad','Thai Sweet Potato Curry'],
'Peanut-Free':['Coconut Lime Rice','Roasted Brussel Sprouts','Penne with Squash and Goat Cheese','Cinnamon Coffee Cake Muffins','Granny’s Spiced Nuts','Honey Mustard Sauce','Macaroni and Cheese','Cranberry Salad','Misir Wat','Roasted Broccoli with Parmesan','Sesame Spinach Salad','Crispy Baked Tofu','Apricot Lentil Soup','Watermelon Italian Ice','Roasted Japanese Sweet Potato','Taco Seasoning','French Onion Soup','Mango Lassi','Chickpea and Avocado Salad','Thai Green Curry','Mustardy BBQ Sauce','Carrot Raisin Salad','Sweet BBQ Sauce 2','Sweet and Sour Chicken Wings','Ribbon Salad','Bulgogi','Mango Sticky Rice','Sweet BBQ Sauce','Thai Curry Paste','Black Bean Butternut Squash Enchilada Casserole','Sweet n Sour Sauce','Berbere (Ethiopian spice mix)','Crispy Roasted Potatoes','Fried Rice','BBQ Jackfruit','Atkilt','Kheer','Gomen Wat','Sweet and Moist Cornbread','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Tomato Jam'],
'Ethiopian':['Misir Wat','Niter Kibbeh','Berbere (Ethiopian spice mix)','Atkilt','Gomen Wat'],
'Japanese':['Roasted Japanese Sweet Potato'],
'Breakfast':['Cinnamon Coffee Cake Muffins','Crispy Roasted Potatoes'],
'Salads':['Sesame Spinach Salad','Chickpea and Avocado Salad','Carrot Raisin Salad','Thai Salad','Roasted Beet Goat Cheese Salad'],
'Sauces':['Honey Mustard Sauce','Thai Peanut Sauce','Teriyaki Sauce','Mustardy BBQ Sauce','Sweet BBQ Sauce 2','Sweet BBQ Sauce','Sweet n Sour Sauce'],
'Drinks':['Mango Lassi']
};
var savedRecipes = [];
var savedRecipeIDs = [];
var recipesList = document.getElementById("matching-recipes");
var tags_p = document.getElementById("selected-tags");

function deepCopyArray(arr) {
    newArr = [];
    for(let i=0; i < arr.length; i++) {
	newArr.push(arr[i]);
    }
    return newArr;
}

function getAddOrRemoveGroup(button) {
    return function() {
	if(selected.includes(button.id)) {
	    let pos = selected.indexOf(button.id);
	    selected.splice(pos,1);
	} else {
	    selected.push(button.id);
	}
	reloadTags();
	reloadList();
    }
}

function reloadList() {
    if(selected.length==0) {
	let idCopy = deepCopyArray(savedRecipeIDs);
        for(let i=0; i < idCopy.length; i++) {
	    restoreFromSave(idCopy[i]);
	}
    } else {

	// get a list of the recipes that match all selected tags
	let matchingRecipes = groups[selected[0]];
	for(let i = 1; i < selected.length; i++) {
	    matchingRecipes = matchingRecipes.filter(name => groups[selected[i]].includes(name));
	}

	console.log(matchingRecipes)

	// if any recipes are saved that match the tags, add them
	let idCopy = deepCopyArray(savedRecipeIDs);
	for(let i = 0; i < idCopy.length; i++) {
	    if(matchingRecipes.includes(idCopy[i])) {
		console.log(idCopy[i]);
		restoreFromSave(idCopy[i]);
	    }
	}

	// if any recipes are still there that DON'T match, remove
	let children = deepCopyArray(recipesList.childNodes);
	for(let i = 0; i < children.length; i++) {
	    console.log("child: "+children[i].id);
	    if(children[i].id !== undefined) {
		if(!matchingRecipes.includes(children[i].id)) {
		    console.log("removing: "+children[i].id);
		    removeAndSave(children[i].id);
	        }
	    }
	    
        }
    }
}

function removeAndSave(id) {
    let recipe = document.getElementById(id);
    savedRecipes.push(recipe);
    savedRecipeIDs.push(recipe.id);
    recipesList.removeChild(recipe);
}

function restoreFromSave(id) {
    let pos = savedRecipeIDs.indexOf(id); 
    recipesList.appendChild(savedRecipes.splice(pos,1)[0]);
    savedRecipeIDs.splice(pos,1);
}

function reloadTags() {
    tags_p.innerHTML = selected.join(", ");
}

const buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',getAddOrRemoveGroup(buttons[i]));
}
/*
when button click
change appearance of button to depressed
for element in list of recipes
  let value = element.getAttribute(tags);
  if tag not in value:
    remove element from list and save

when button unclick
for element in list of saved_recipes
  let value = element.getAttribute(tags);
  if tag in value for all tag in still_selected:
  add element back to list and remove from saved_recipes

when clearbutton click
unclick all buttons
clear all tags
add all saved_recipes back to list
empty saved_recipes
*/
