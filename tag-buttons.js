var selected = [];
var groups = {
    'Breakfast':['Cinnamon Coffee Cake Muffins','Crispy Roasted Potatoes'],
'Dinner':['Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Sweet and Sour Chicken Wings','Fried Rice','Misir Wat','Navratan Korma','Bulgogi','Thai Sweet Potato Curry','Penne with Squash and Goat Cheese','Thai Green Curry'],
'Dessert':['Granny’s Spiced Nuts','Kheer','Ribbon Salad','Mango Sticky Rice'],
'Sides':['Roasted Brussel Sprouts','Gomen Wat','Crispy Roasted Potatoes','Cranberry Salad','Atkilt','Roasted Broccoli with Parmesan'],
'Soups':['French Onion Soup','Apricot Lentil Soup'],
'Salads':['Carrot Raisin Salad','Thai Salad','Roasted Beet Goat Cheese Salad','Sesame Spinach Salad','Chickpea and Avocado Salad'],
'Sauces':['Honey Mustard Sauce','Sweet BBQ Sauce 2','Sweet BBQ Sauce','Mustardy BBQ Sauce','Thai Peanut Sauce','Sweet n Sour Sauce'],
'Spices':['Garam Masala','Thai Curry Paste','Taco Seasoning','Berbere (Ethiopian spice mix)','Niter Kibbeh'],
'Drinks':['Mango Lassi'],
'Preserves':['Tomato Jam'],
'Vegetarian':['Cinnamon Coffee Cake Muffins','Garam Masala','Honey Mustard Sauce','Roasted Brussel Sprouts','Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Carrot Raisin Salad','Tomato Jam','Apricot Lentil Soup','Sweet BBQ Sauce 2','Gomen Wat','Roasted Japanese Sweet Potato','Kheer','Crispy Roasted Potatoes','Sweet BBQ Sauce','Thai Salad','Cranberry Salad','Thai Curry Paste','Misir Wat','Navratan Korma','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Mango Lassi','Mustardy BBQ Sauce','Sesame Spinach Salad','Chickpea and Avocado Salad','Penne with Squash and Goat Cheese','Taco Seasoning','Thai Green Curry','Thai Peanut Sauce','Atkilt','Roasted Broccoli with Parmesan','Berbere (Ethiopian spice mix)','Sweet n Sour Sauce','Mango Sticky Rice','Niter Kibbeh'],
'Vegan':['Cinnamon Coffee Cake Muffins','Roasted Brussel Sprouts','Tomato Jam','Apricot Lentil Soup','Gomen Wat','Roasted Japanese Sweet Potato','Crispy Roasted Potatoes','Misir Wat','Thai Sweet Potato Curry','Penne with Squash and Goat Cheese','Taco Seasoning','Thai Green Curry','Thai Peanut Sauce','Atkilt','Roasted Broccoli with Parmesan','Mango Sticky Rice'],
'Gluten-Free':['Cinnamon Coffee Cake Muffins','Garam Masala','Honey Mustard Sauce','Roasted Brussel Sprouts','Granny’s Spiced Nuts','Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Carrot Raisin Salad','Tomato Jam','Apricot Lentil Soup','Sweet BBQ Sauce 2','Gomen Wat','Roasted Japanese Sweet Potato','Kheer','Crispy Roasted Potatoes','Sweet BBQ Sauce','Sweet and Sour Chicken Wings','Thai Salad','Cranberry Salad','Ribbon Salad','Fried Rice','Thai Curry Paste','Misir Wat','Navratan Korma','Roasted Beet Goat Cheese Salad','Bulgogi','Thai Sweet Potato Curry','Mango Lassi','Mustardy BBQ Sauce','Sesame Spinach Salad','Chickpea and Avocado Salad','Penne with Squash and Goat Cheese','Taco Seasoning','Thai Green Curry','Thai Peanut Sauce','Atkilt','Roasted Broccoli with Parmesan','Berbere (Ethiopian spice mix)','Sweet n Sour Sauce','Mango Sticky Rice','Niter Kibbeh'],
'Nut-Free':['Cinnamon Coffee Cake Muffins','Garam Masala','French Onion Soup','Honey Mustard Sauce','Roasted Brussel Sprouts','Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Carrot Raisin Salad','Tomato Jam','Apricot Lentil Soup','Sweet BBQ Sauce 2','Gomen Wat','Roasted Japanese Sweet Potato','Crispy Roasted Potatoes','Sweet BBQ Sauce','Sweet and Sour Chicken Wings','Cranberry Salad','Ribbon Salad','Fried Rice','Thai Curry Paste','Misir Wat','Roasted Beet Goat Cheese Salad','Bulgogi','Thai Sweet Potato Curry','Mango Lassi','Mustardy BBQ Sauce','Sesame Spinach Salad','Chickpea and Avocado Salad','Taco Seasoning','Thai Green Curry','Atkilt','Roasted Broccoli with Parmesan','Berbere (Ethiopian spice mix)','Sweet n Sour Sauce','Mango Sticky Rice','Niter Kibbeh'],
'Peanut-Free':['Cinnamon Coffee Cake Muffins','French Onion Soup','Honey Mustard Sauce','Roasted Brussel Sprouts','Granny’s Spiced Nuts','Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Carrot Raisin Salad','Tomato Jam','Apricot Lentil Soup','Sweet BBQ Sauce 2','Gomen Wat','Roasted Japanese Sweet Potato','Kheer','Crispy Roasted Potatoes','Sweet BBQ Sauce','Sweet and Sour Chicken Wings','Cranberry Salad','Ribbon Salad','Fried Rice','Thai Curry Paste','Misir Wat','Roasted Beet Goat Cheese Salad','Bulgogi','Thai Sweet Potato Curry','Mango Lassi','Mustardy BBQ Sauce','Sesame Spinach Salad','Chickpea and Avocado Salad','Penne with Squash and Goat Cheese','Taco Seasoning','Thai Green Curry','Atkilt','Roasted Broccoli with Parmesan','Berbere (Ethiopian spice mix)','Sweet n Sour Sauce','Mango Sticky Rice'],
'Sesame-Free':['Cinnamon Coffee Cake Muffins','Garam Masala','French Onion Soup','Honey Mustard Sauce','Roasted Brussel Sprouts','Granny’s Spiced Nuts','Black Bean Butternut Squash Enchilada Casserole','Macaroni and Cheese','Carrot Raisin Salad','Tomato Jam','Apricot Lentil Soup','Sweet BBQ Sauce 2','Gomen Wat','Kheer','Crispy Roasted Potatoes','Sweet BBQ Sauce','Sweet and Sour Chicken Wings','Thai Salad','Cranberry Salad','Fried Rice','Thai Curry Paste','Misir Wat','Navratan Korma','Roasted Beet Goat Cheese Salad','Thai Sweet Potato Curry','Mango Lassi','Mustardy BBQ Sauce','Chickpea and Avocado Salad','Penne with Squash and Goat Cheese','Taco Seasoning','Thai Green Curry','Atkilt','Roasted Broccoli with Parmesan','Berbere (Ethiopian spice mix)','Sweet n Sour Sauce','Mango Sticky Rice','Niter Kibbeh'],
'Indian':['Garam Masala','Kheer','Navratan Korma','Mango Lassi'],
'Ethiopian':['Gomen Wat','Misir Wat','Atkilt','Berbere (Ethiopian spice mix)','Niter Kibbeh'],
'Thai':['Thai Salad','Thai Curry Paste','Thai Sweet Potato Curry','Thai Green Curry','Thai Peanut Sauce','Mango Sticky Rice'],
'Korean':['Bulgogi','Sesame Spinach Salad'],
'Camping':[],
'Family Recipes':['Granny’s Spiced Nuts','Sweet and Sour Chicken Wings','Cranberry Salad','Ribbon Salad','Fried Rice','Bulgogi'],
'Thanksgiving':['Cranberry Salad','Ribbon Salad']
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
