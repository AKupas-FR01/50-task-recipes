
const main = document.querySelector('.main');






function addToList() {
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
