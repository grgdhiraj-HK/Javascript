/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
            let Number1 = document.getElementById("op-one").value;
            let Number2 = document.getElementById("op-two").value;
            let Total= Number(Number1) + Number(Number2);
            alert (Total);
    });

    document.getElementById("subtraction").addEventListener("click", function() {
        // perform an subtraction
        let Number1 = document.getElementById("op-one").value;
        let Number2 = document.getElementById("op-two").value;
        let Total= Number(Number1) - Number(Number2);
        console.log(Total);
        alert (Total);
        return;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let Number1 = document.getElementById("op-one").value;
        let Number2 = document.getElementById("op-two").value;
        let Total= Number(Number1) * Number(Number2);
        alert (Total);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let Number1 = document.getElementById("op-one").value;
        let Number2 = document.getElementById("op-two").value;
        let Total= Number(Number1) / Number(Number2);
        alert (Total);
    });
})();
