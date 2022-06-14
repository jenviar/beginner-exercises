//We are going to 
class Step {
    constructor(name, time) {
        this.name = name;
        this.time = time;
      }
}

const recipe = [ new Step('Measure', 5), new Step('Add', 1), new Step('Mix', 2), new Step('Bake', 45)]
let totalTime = 0;
let textRecipe = '';

for (let i = 0; i < recipe.length;  i++){
    totalTime += recipe[i].time
    textRecipe += `${i+1}. ${recipe[i].name}\n`
}
let totalRecipe = textRecipe + '\nTiempo total: ' +totalTime + 'min'
console.log(totalRecipe);