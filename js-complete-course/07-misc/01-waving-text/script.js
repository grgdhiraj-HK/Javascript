/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let container = document.getElementById("target");
    let letters = document.getElementById("target").innerText;
    console.log(letters);
    letters = letters.split("");
    console.log(letters);
    container.innerText = "";
    let textSize = 20;
    let checker = true;
    letters.forEach(function(letter) {
        let wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.fontSize = textSize +"px";
        if (textSize > 50) {
            textSize = 20;
        }
        textSize += 5;

        container.appendChild(wrap);
    });
})();