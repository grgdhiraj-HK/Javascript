/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here (Dedupe = remove duplicates)
    document.getElementById("run").addEventListener("click", function () {
        let unique = [...new Set(fruits)];
        console.log(unique);
    })
})();

//'Set' only lets you store unique values. When you pass in an array, it will remove any duplicate values.
// Ref: https://bit.ly/3628oWo