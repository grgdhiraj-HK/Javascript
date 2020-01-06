/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(function () {
    // your code here

    let buttonA = document.getElementById("part-one");
    let buttonB = document.getElementById("part-two");
    let buttonC = document.getElementById("part-three");
    let buttonD = document.getElementById("part-four");
    let output = document.getElementById("target");

    buttonA.onclick = function () {
        parseInt(buttonA.innerText);
        buttonA.innerText++;
        output.innerHTML = "0" + buttonA.innerHTML + buttonB.innerHTML + buttonC.innerHTML + buttonD.innerHTML;
    }
    buttonB.onclick = function () {
        parseInt(buttonB.innerText);
        buttonB.innerText++;
        output.innerHTML = "0" + buttonA.innerHTML + buttonB.innerHTML + buttonC.innerHTML + buttonD.innerHTML;
    }
    buttonC.onclick = function () {
        parseInt(buttonC.innerText);
        buttonC.innerText++;
        output.innerHTML = "0" + buttonA.innerHTML + buttonB.innerHTML + buttonC.innerHTML + buttonD.innerHTML;
    }
    buttonD.onclick = function() {
        parseInt(buttonD.innerText);
        buttonD.innerText++;
        output.innerHTML = "0" + buttonA.innerHTML + buttonB.innerHTML + buttonC.innerHTML + buttonD.innerHTML;
    }

})();
