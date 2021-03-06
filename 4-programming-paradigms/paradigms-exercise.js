const _= require('lodash/fp')

//We are going to make a recipe and calculate the time to complete it using two different programming paradigms.
class Step {
    constructor(name, time) {
        this.name = name;
        this.time = time;
      }
}

const recipe = [ new Step('Measure', 5), new Step('Add', 1), new Step('Mix', 2), new Step('Bake', 45)]

//Imperative - Structured programming
let totalTime = 0;
let textRecipe = '';

for (let i = 0; i < recipe.length;  i++){
    totalTime += recipe[i].time
    textRecipe += `${i+1}. ${recipe[i].name}\n`
}
let totalRecipe = textRecipe + '\nTiempo total: ' +totalTime + 'min'
console.log(totalRecipe);

//Declarative - Functional programming
const get = field => _.map(_.get(field))
const sum = field => _.flow(get(field), _.sum)
const sumStr = field => _.flow(get(field), _.join("\n"))

const prepareRecipe = recipe => {
    _.flow(sumStr('name'), console.log)(recipe)
    _.flow(sum('time'), console.log)(recipe)
}

prepareRecipe(recipe)


