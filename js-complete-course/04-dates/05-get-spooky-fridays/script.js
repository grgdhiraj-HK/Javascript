/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    
    document.getElementById("run").addEventListener("click", function () {


      let spookyear= document.getElementById("year").value;


        if (spookyear == "") {
            alert("Please input a year");
            return
        }


        function numberOfFridaythe13thsIn(year) {

            let calendar = ["January","February", "March","April", "May", "June", "July", "August", "September","October", "November","December",
            ];


            let count = 0;
            for (let month = 0; month < 12; month++) {
                let d = new Date(year, month, 13);
                if (d.getDay() == 5) {
                    count++;
                    console.log(month);
                    alert("13 " + calendar[d.getMonth()]);
                }
            }
            return count;
        }

        console.log(numberOfFridaythe13thsIn(spookyear));


    });


})();
