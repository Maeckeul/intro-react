// tableau
var fruits = ['pomme', 'poire', 'orange'];

console.log('je mange : ' + fruits[0]);

console.log(`Je mange : ${fruits[0]}`);

// boucle for
for (var fruitIndex = 0; fruitIndex < fruits.length; fruitIndex++)
{
    console.log(`je mange ${fruits[fruitIndex]}`);
}

// boucle for ... of
// debugger;
for (let fruit of fruits)
{
    setTimeout(function() {
        console.log(`Je mange ${fruit}`);
    }, 1000);
}

// déclaration de fonction
// function log(fruitInconnu, fruitIndex)
// {
//     console.log(`je mange ${fruitInconnu} ${fruitIndex}`);
// }

// expression de fonction
let log = function(fruitInconnu, fruitIndex) 
{
    console.log(`je mange ${fruitInconnu} ${fruitIndex}`);
}

// methode forEach
fruits.forEach(log);
