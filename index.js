// import meat, veg, carbs 
// import meat from 'meat.json'
// import veg from 'veg.json'
// import carbs from 'carbs.json'

let meats = ["peri chicken", "salmon fish"];
let veg = ["brocoli", "peppers", "mixed veg", "carrots"];
let carbs = ["brocoli", "peppers", "mixed veg", "carrots"];

const randomiser = (foods) => {
  const option = Math.floor(Math.random() * foods.length);
  return foods[option];
};

const comboMaker = (times) => {
    for(let i = 0; i < times; i++){
        let recipe = []
        recipe.push(randomiser(meats));
        recipe.push(randomiser(veg));
        recipe.push(randomiser(veg));
        console.log(recipe);
    }
}

console.log(comboMaker(6));

