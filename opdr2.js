// 2a
// pseudocode
// maak een output variabele
// loop over de array heen
// voor elke entry bereken hoeveel er hiervan verkocht zijn en tel deze dan op bij de variabele tvsSold
// log de variable

let tvsSold = 0;
for (let i = 0; i < inventory.length; i++) {
    tvsSold = tvsSold + inventory[i].sold;
}
console.log(tvsSold);

// 2b
// maak een element aan in de html die we als "anker" kunnen gebruiken
// sla de referentie op naar dat element in ons script
// maak twee nieuwe elementen waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons "anker" element.
//schrijf styling voor de id van het item
const soldTvs = document.getElementById("tvsSold");
soldTvs.innerHTML = `
    <h2>Hoeveel tv's zijn er al verkocht?</h2>
    <h3>Er zijn ${tvsSold} verkocht.</h3>
`;

// 2c
// maak een output variabele
// loop over de array heen
// voor elke entry kijk hoeveel tvs er gekocht zijn en tel dit bij de output variabele op
// log de variabele
let tvsBought = 0;
for (i = 0; i < inventory.length; i++) {
    tvsBought = tvsBought + inventory[i].originalStock;
}
console.log(tvsBought);
// 2d
// maak een element aan in de html die we als "anker" kunnen gebruiken
// sla de referentie op naar dat element in ons script
// maak twee nieuwe elementen waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons "anker" element.
//schrijf styling voor de id van het item
const boughtTvs = document.getElementById("tvsBought");
boughtTvs.innerHTML = `
    <h2>Hoeveel tv's heeft Tech It Easy ingekocht?</h2>
    <h3>Ze hebben ${tvsBought} ingekocht.</h3>
`;

//2e
// maak een variabele
// sla in de variabele het verschil tussen de gekochte en verkochte tvs
// log de variabele
// maak een element aan in de html die we als "anker" kunnen gebruiken
// sla de referentie op naar dat element in ons script
// maak twee nieuwe elementen waarin we de beschrijving en hoeveelheid items kunnen plaatsen, en zet dit in ons "anker" element.
//schrijf styling voor de id van het item
const tvsToBeSold = tvsBought - tvsSold;
console.log(tvsToBeSold);

const elementTvsToBeSold = document.getElementById("tvsToBeSold");
elementTvsToBeSold.innerHTML = `
    <h2>Hoeveel tv's moeten er nog verkocht worden?</h2>
    <h3>Er moeten nog ${tvsToBeSold} verkocht worden.</h3>
`;


