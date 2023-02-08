const main = document.querySelector('.main');
const inputs = document.querySelectorAll('input');
const btnAddIngredient = document.getElementById('addIngredient');
const btnGetPhoto = document.getElementById('getPhoto');
const btnPreview = document.getElementById('preview');
const warning = document.querySelector(".warning")


let imageLink = "";
let inputsRecipe = [];
let allIngredients = [];

let addedRecipes = {};

btnGetPhoto.onclick = () => {
    function randomImage() {

        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(res => res.json())
            .then(data=> {
                console.log(data.meals[0])
                imageLink = data.meals[0].strMealThumb
                console.log(imageLink)
            })
    }
    randomImage()
}





btnPreview.onclick = () => {
    let item = {
        title: inputs[0].value,
        ingredient1: inputs[1].value,
        ingredient2: inputs[2].value,
        ingredient3: inputs[3].value,
        description: inputs[4].value,
        calories: inputs[5].value,
        image: imageLink,
    }


    if (item.title.length === 0 || item.calories.length === 0) {
        inputs[0].style.border = "2px solid red";
        inputs[5].style.border = "2px solid red";
        warning.innerHTML += `
        <div class="warning">
          <div>The boxes must be filled</div>
        </div>
        `
        return
    } else {
        inputs[0].style.border = "2px solid #eee2dc;";
        inputs[5].style.border = "2px solid #eee2dc;";
    }

    inputsRecipe.push(item)
    console.log(inputsRecipe)

    createPreview()

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
    inputs[5].value = "";

}


function createPreview() {
    main.innerHTML = ""

    inputsRecipe.map(item => {

        main.innerHTML = `
            <div class="box d-flex gap20 f-column a-top">
              <div class="d-flex gap20 a-top">        
                  <img src=${item.image} alt="">
               
                  <div class="recipeTitle">
                       <h3>${item.title}</h3>
                       <div><b>Calories: </b>${item.calories} kcal</div>
                       <div>
                       <b>Ingredients: </b>${item.ingredient1}, ${item.ingredient2}, ${item.ingredient3}</div>
                       <hr />
                       <div><b>Description: </b>${item.description}</div>   
                  </div>
                </div>       
                <div>
                                       
                    <button id="add">ADD RECIPE TO LIST</button>
                </div>
            </div>
            
           
       `
        const btnAddToList = document.getElementById('add');


           btnAddToList.onclick = () => {

                addedRecipes = inputsRecipe;
                console.log(addedRecipes)
                localStorage.setItem("addedRecipes", JSON.stringify(addedRecipes))
          }

    })

}




