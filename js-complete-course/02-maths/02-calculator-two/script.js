/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function Calculation(math) {
 var x = parseFloat(document.getElementById("op-one").value);
 var y = parseFloat(document.getElementById("op-two").value);



    switch (math) {
        case "addition":
            solution = (x + y);
            break;
        case "substraction":
            solution = (x - y);
            break;
        case "multiplication":
            solution = (x * y);
            break;
        case "division":
            solution = (x / y);
            break;
}
    alert("The answer is " + solution);
}