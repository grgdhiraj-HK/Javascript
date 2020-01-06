/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

        let trial = 0;
        let totalNumbers = Math.floor(Math.random() * 100);
        let inputNumber = prompt("Guess the number between 1 and 100");

        while (true) {
            trial++;
            if (inputNumber < totalNumbers)
                inputNumber = prompt("Oops! Try a higher number");

            else if (inputNumber > totalNumbers)
                inputNumber = prompt("Oops! Try a lower number");

            else {
                alert(
                    "That's it! You guessed it right in " +
                    trial +
                    " guess!"
                );

                break;
            }
        }
    })();

//Refer to: https://www.geeksforgeeks.org/number-guessing-game-using-javascript/