/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let name = prompt('What is your name?');
    let age = prompt('How old are you?');
    let town = prompt("Where do you live?");

    alert(`Your name is ${name} and you are ${age} years old. Your Town is ${town}`);
    // new way with $ sign
    // ` this is backtick and used while using $ sign
    if (confirm('Are you ' + name + ' aged '+ age + ' years old from ' + town +'?'));
// string addition; concatenation - traditional method
    //The dollar sign $ here is to represent string - see template literals on MDN

     else {
        alert(`Restart`);
        let name = prompt('What is your name?');
        let age = prompt('How old are you?');
        let town = prompt("Where do you live?");


    }

})();
