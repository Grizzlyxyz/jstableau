let monString = "la coding school";
let premierNumber = 17;
let secondNumber = 10;
let yesOnot = true;
let monTab = ["la coding school,36,monString,premierNumber,secondNumber,yesOnot"];



console.log(monTab);
console.log('_____');
console.log(monTab);

//consolole.log("____");
//console.log[3];

monTab.push('coding school');
console.log(monTab);

// Exo 01
// déclarer un tableau et rajouter 5 éléments avec l'aide de la fonction push();
let tableauExercice = [];
tableauExercice.push ('respect','assiduiter','force','honneur','courage');
console.log(tableauExercice);
// Exo 02 Supprimer le premier élément du tableau avec l'aide d'une function
tableauExercice.shift();
console.log(tableauExercice);
// Exo 03 Supprimer le dernière élément du tableau avec l'aide d'une function
tableauExercice.pop();
tableauExercice.pop();
console.log(tableauExercice);
// Exo 04 partie 1 Créer un tableau avec 8 prénoms du nom de laClasse
// nicolas,maxime,salim,ismail,nathan,youssef,salma,mourad
let laClasse = ["nicolas,maxime,salim,ismail,nathan,youssef,salma,mourad"];
console.log(laClasse[2]);

console.log("methode");
console.log(laClasse);
console.log(laClasse.slice(2));
console.log(laClasse.slice(2,8));
// Afficher uniquement salim
// Exo 04 partie 2 Remplacer salim par sonia avec l'aide d'une function et rajouter le console.log de l'exercice 4

laClasse.splice(2,1"sonia");
console.log(laClasse);


// Exo 05 Retirer maxime du tableau avec l'aide d'une function

console.log("Exo5");
laClasse.splice(1,1);





