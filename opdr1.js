// 1a
// gebruik de map methode om door alle entrys te loopen
// geef een array terug met type-namen
// voor iedere entry in de array (tv), stop het tv type (tv.type) in de uitkomst

const tvTypes = inventory.map((tv) => {
    return tv.type;
});
console.log(tvTypes);

// 1b
// loop door de array heen met de filter methode
// controleer voor iedere entry in de array de voorraad met de voorwaarde originalStock - sold === 0
// geef dan het hele object terug aan de array

const soldOut = inventory.filter((tv) => {
    return (tv.originalStock - tv.sold) === 0;
});

console.log(soldOut);

// 1c
// loop door de array heen met de filter methode
// controleer voor iedere entry in de array of het item over AmbiLight beschikt
// een tv beschikt over ambilight wanneer tv.ambiLight === true
// geeft het object terug aan de array

const tvWithAmbiLight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
});

console.log(tvWithAmbiLight);

// 1d
// loop door de array heen
// gebruik sort()
// vergelijk de prijs inventory.price
// wanneer prijs a hoger is dan prijs b return 1
// wanneer prijs a lager is dan prijs b return -1
// wanneer prijs a gelijk is aan prijs b return 0
// geef de nieuwe array tvsOrderdedByPrice terug

// in onderstaand geval is de variable tvsOrderedByPrice overbodig omdat de sort methode altijd op de orginele array wordt toegepast.
// const tvsOrderedByPrice = inventory.sort((a,b) => {
//     if(a.price < b.price){
//         return -1;
//     }
//     if(a.price > b.price){
//         return 1;
//     }
//     return 0;
// });
// console.log(tvsOrderedByPrice);

inventory.sort((a,b) => {
    if(a.price < b.price){
        return -1;
    }
    if(a.price > b.price){
        return 1;
    }
    return 0;
});
console.log(inventory);
