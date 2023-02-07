const main = document.querySelector('.main');
const inputs = document.querySelectorAll('input');
const btnAddIngredient = document.getElementById('addIngredient');
const btnGetPhoto = document.getElementById('getPhoto');
const btnPreview = document.getElementById('preview');

const btnAddToList = document.getElementById('addToList');

let imageLink = "";
let inputsValue = [];

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
        ingredient: inputs[1].value,
        description: inputs[2].value,
        calories: inputs[3].value,
        image: imageLink,
    }


    if (inputs[0].value.length === 0 || inputs[3].value.length === 0) {
        inputs[0].style.border = "2px solid red";
        inputs[3].style.border = "2px solid red";
        return
    } else {
        inputs[0].style.border = "2px solid #eee2dc;";
        inputs[3].style.border = "2px solid #eee2dc;";
    }

    inputsValue.push(item)
    console.log(inputsValue)
    createPreview()
}


function createPreview() {
     main.innerHTML = ""

    inputsValue.map(item => {

    main.innerHTML += `
            <div class="box d-flex gap20">
                <img src=${item.image} alt="">
                <div class="recipeTitle">
                    <h3>${item.title}</h3>
                    <div><b>Calories: </b>${item.calories} kcal</div>
                    <div><b>Description: </b>${item.description}</div>
                    <div><b>Ingredients: </b>${item.ingredient}</div>
                </div>
            </div>
            <button id="addToList">ADD RECIPE TO LIST</button>
       `
    })
}


