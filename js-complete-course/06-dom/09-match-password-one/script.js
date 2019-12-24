/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click",function(){
        let pwd1 = document.getElementById("pass-one").value;
        let pwd2= document.getElementById("pass-two").value;

        if(pwd1 !== pwd2){
            document.getElementById("pass-one").style.borderColor = "red";
            document.getElementById("pass-two").style.borderColor = "red";
        }
        else {
            alert("Success!");
        }
    })

})();
