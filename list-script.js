
const main = document.querySelector('.main');
const btnFilter = document.getElementById('filter');


const myRecipes = localStorage.getItem("addedRecipes");
console.log(JSON.parse(myRecipes));


function appendSelectedRecipes(myRecipes) {

    myRecipes = JSON.parse(myRecipes)

    myRecipes.map(item => {

        main.innerHTML += `
            <div id="boxList" class="box singleRecipe d-flex gap10 f-column a-top">
                <img src=${item.image} alt="">
                 <h3>${item.title}</h3>
                 <div><b>Calories: </b>${item.calories} kcal</div>
                 <div><b>Ingredients: </b>${item.ingredient}</div>
                 <div><b>Description: </b>${item.description}</div>
               </div>
            </div>
        `

    })
}

appendSelectedRecipes(myRecipes)


// Filter
btnFilter.onclick = () => {

    let title = inputs[0].value;
    let calories = Number(inputs[1].value);
    let ingredients = inputs[2].value;

    // let result = products


    if(ageFind) result = products.filter(product => products.title === title)
    if(heightFind) result = result.filter(products => products.calories === calories)
    if(weightFind) result = result.filter(products => products.ingredients === ingredients)


    appendSelectedRecipes(result)

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";

  }







// function addToList() {
//     main.innerHTML = ""
//
//     inputsValue.map(item => {
//
//         main.innerHTML += `
//             <div id="boxList" class="box singleRecipe d-flex gap10 f-column a-top">
//                 <img src=${item.image} alt="">
//                  <h3>${item.title}</h3>
//                  <div><b>Calories: </b>${item.calories} kcal</div>
//                  <div><b>Ingredients: </b>${item.ingredient}</div>
//                  <div><b>Description: </b>${item.description}</div>
//                </div>
//             </div>
//             <button id="addToList">ADD RECIPE TO LIST</button>
//        `
//     })
// }
