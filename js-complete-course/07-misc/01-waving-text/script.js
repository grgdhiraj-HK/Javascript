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
    // your code here
        let target = document.getElementById("target");
        let wavyWords = target.innerText.split("");
        console.log(wavyWords);
        let word = "", text = "", size =  12;
        for(let i=0; i<wavyWords.length; i++){
            if (size % 1 === 0) {
                size = 9;
                word = wavyWords[i].toString();
                text += word.fontsize(size) + " ";
            } else {
                word = wavyWords[i].toString();
                console.log(size);
                text += word.fontsize(size) + " ";
            }
            size+= 17;
        }
        target.innerHTML = text;

    })();

