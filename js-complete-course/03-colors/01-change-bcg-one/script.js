
/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //added on click for each button
    document.getElementById("red").addEventListener("click", function() {
        // perform an addition
        document.body.style.backgroundColor = "#ef0a0a";
    });
    document.getElementById("green").addEventListener("click", function() {
        // perform an addition
        document.body.style.backgroundColor = "#17dc0a";
    });
    document.getElementById("yellow").addEventListener("click", function() {
        // perform an addition
        document.body.style.backgroundColor = "#f3f30e";
    });
    document.getElementById("blue").addEventListener("click", function() {
        // perform an addition
        document.body.style.backgroundColor = "#0b5a9c";
    });

    // your code here

})();