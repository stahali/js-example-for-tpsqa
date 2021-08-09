//minimal example on how to use require to import json
const data = require("./data.json");

data.animals.forEach(dataOfAnimal => {
    console.log(dataOfAnimal.animal);
    dataOfAnimal.children.forEach(child => {
        console.log(`\t ${child}`);
    });
});