/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
// your code here

    document.querySelector("#run").addEventListener("click", function() {
        let input1 = document.querySelector("#pass-one");
        let input2 = document.querySelector("#pass-two");
        if (input1.value !== input2.value) {
            input1.setAttribute("class", "error");
            input2.setAttribute("class", "error");
        }
    })

})();

