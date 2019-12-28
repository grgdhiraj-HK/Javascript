/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here

    document.getElementById("pass-one").addEventListener("input", function () {
   let pwdElement = document.getElementById("pass-one");
   let pwdValue = pwdElement.value;
   let pwdLength = pwdValue.length;
   let pwdNumberValue = pwdValue.match(/\d/g);

   if (pwdLength >=8 && pwdNumberValue!=null && pwdNumberValue.length >=2){
        //&& is to do two conditions together instead of multiple 'if'
           document.getElementById("validity").innerHTML="Ok";
   }
    else {
       document.getElementById("validity").innerHTML="Not ok";
   }
    //Learn more about RegExp!

    })


})();
