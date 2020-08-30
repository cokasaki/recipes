var selected = [];
var groups = {
    %s
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
