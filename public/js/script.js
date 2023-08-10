// let addIngredientsBtn=document.getElementById("addIngredientsBtn");
// let ingredientList=document.querySelector(".ingredientList");
// let ingredientDiv=document.querySelector(".ingredientDiv")[0];
// addIngredientsBtn.addEventListener('click',function(){
//     let newIngredients=ingredientDiv.cloneNode(true);
//     let input=newIngredients.getElementByTagName('input')[0];
//     input.value="";
//     ingredientList.appendChild(newIngredients)
// })


let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let IngredientsList = document.querySelector(".ingredientList");
let IngredientDiv = document.querySelector(".ingredientDiv");

addIngredientsBtn.addEventListener('click', function () {
    // Create a new ingredient div element
    let newIngredients = document.createElement('div');
    newIngredients.classList.add('ingredientItem'); // Add a class for styling purposes

    // Create a new input element and reset its value
    let input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form-control');
    input.value = "";
    newIngredients.appendChild(input); // Add the input to the new ingredient div

    IngredientsList.appendChild(newIngredients); // Append the new ingredient div to the list
});
