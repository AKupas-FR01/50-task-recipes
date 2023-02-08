
const main = document.querySelector('.main');
const btnFilter = document.getElementById('filter');
const inputs = document.querySelectorAll('input');

let myRecipes = JSON.parse(localStorage.getItem("addedRecipes"))


function appendSelectedRecipes() {
    console.log(myRecipes)

    main.innerHTML = ""

    myRecipes.map(item => {
        main.innerHTML += `
            <div id="boxList" class="box singleRecipe d-flex gap10 f-column a-top">
                <img src=${item.image} alt="">
                 <h3>${item.title}</h3>
                 <div><b>Calories: </b>${item.calories} kcal</div>
                 <div><b>Ingredients: </b>${item.ingredient1}, ${item.ingredient2}, ${item.ingredient3}</div>
                 <div><b>Description: </b>${item.description}</div>
               </div>
            </div>
        `

    })
}
appendSelectedRecipes()

// Filter


    btnFilter.onclick = () => {

      let titleF = inputs[0].value;
      let caloriesF = inputs[1].value;
      let ingredientsF = inputs[2].value;

    let result = myRecipes

    if(titleF) result = myRecipes.filter(item => item.title === titleF)
    if(caloriesF) result = result.filter(item => item.calories === caloriesF)
    if(ingredientsF) result = result.filter(item => item.ingredient === ingredientsF)

    console.log(result)

        main.innerHTML = ""

        result.map(item => {
            main.innerHTML += `
            <div id="boxList" class="box singleRecipe d-flex gap10 f-column a-top">
                <img src=${item.image} alt="">
                 <h3>${item.title}</h3>
                 <div><b>Calories: </b>${item.calories} kcal</div>
                 <div><b>Ingredients: </b>${item.ingredient1}, ${item.ingredient2}, ${item.ingredient3}</div>
                 <div><b>Description: </b>${item.description}</div>
               </div>
            </div>
        `

        })

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";

}

