/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    (function() {

        let target = document.getElementById("target");
        let button = document.getElementById("increment");
        let count = window.localStorage.getItem("counter");
        target.innerHTML = count;

        if(target.innerHTML=""){
            target.innerHTML = 0;
        }
        button.addEventListener("click" , function(){
            count++;
            target.innerHTML =count;
            window.localStorage.setItem("counter" , count);

        });
    })();
})();
