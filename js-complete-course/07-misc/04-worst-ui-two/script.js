/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var firstButton = 460;
document.getElementById("part-one").addEventListener("click", function () {

    document.getElementById("target").innerHTML = "";
    document.getElementById("part-one").innerHTML = "";
    firstButton++;
    if (firstButton > 499) {
        firstButton = 460;
    }
    document.getElementById("part-one").innerHTML = firstButton;
    document.getElementById("target").innerHTML = "+0" + firstButton + secondButton + thirdButton  + fourthButton;

});

var secondButton = "00";
document.getElementById("part-two").addEventListener("click", function () {

    document.getElementById("target").innerHTML = "";
    document.getElementById("part-two").innerHTML = "";
    secondButton++;
    if (secondButton > 99) {
        secondButton = "00";
    }
    if (secondButton < 10){
        secondButton = "0" + secondButton;
    }
    document.getElementById("part-two").innerHTML = secondButton;
    document.getElementById("target").innerHTML = "+0" + firstButton + secondButton + thirdButton + fourthButton;

});

var thirdButton = "00";
document.getElementById("part-three").addEventListener("click", function () {

    document.getElementById("target").innerHTML = "";
    document.getElementById("part-three").innerHTML = "";
    thirdButton++;
    if (thirdButton > 99) {
        thirdButton = "00";
    }
    if (thirdButton < 10){
        thirdButton = "0" + thirdButton;
    }
    document.getElementById("part-three").innerHTML = thirdButton;
    document.getElementById("target").innerHTML = "+0" + firstButton + secondButton + thirdButton + fourthButton;

});

var fourthButton = "00";
document.getElementById("part-four").addEventListener("click", function () {

    document.getElementById("target").innerHTML = "";
    document.getElementById("part-four").innerHTML = "";
    fourthButton++;
    if (fourthButton > 99) {
        fourthButton = "00";
    }
    if (fourthButton < 10){
        fourthButton = "0" + fourthButton;
    }
    document.getElementById("part-four").innerHTML = fourthButton;
    document.getElementById("target").innerHTML = "+0" + firstButton + secondButton + thirdButton + fourthButton;

});

    // your code here
(function () {

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
