/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let cake;
    cake = prompt("Would you like some cake?");

    if (cake ==="yes" || cake ==="Yes" || cake==="of course" || cake==="yeah" || cake==="ok"){
        alert("Congratulations🎂")
       /*Triple Equals is superior to double equals. Whenever possible, you should use triple equals to test equality. */

    } else {
        alert("More for me then 😜!")

    }
})();

