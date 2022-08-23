// 3a
// maak een element aan in de html die als "anker" gebruikt kan worden
// sla de referentie naar dat element op in ons script
// loop door de array "inventory"
// maak een variabele waarin we alle items opslaan
// neem van elke entry de .brand waarde en zet deze in een nieuwe array met de methode "map()" en zet deze waardes in een <li>
// log deze array om te controleren of het werkt
// stop deze list-items in het "anker" element

//const elementTvBrandList = document.getElementById("tvBrandList");
// const tvBrands = inventory.map((tv) => {
//    return  `<li>${tv.brand}</li>`;
// });
//

// elementTvBrandList.innerHTML = `
//     ${tvBrands.join(" ")}
// `;
// 3b schrijf het script om naar een functie

function createTvBrandList(tvArray){
   const elementTvBrandList = document.getElementById("tvBrandList");
   const tvBrands = tvArray.map((tv) => {
      return `<li>${tv.brand}</li>`;
   });
   elementTvBrandList.innerHTML = `${tvBrands.join(" ")}`;
}
createTvBrandList(inventory);