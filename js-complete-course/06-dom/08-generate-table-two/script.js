/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    let target = document.getElementById("target");
    let table = document.createElement("table");

    for (let i = 1; i < 11; i++){
        let row = document.createElement("tr");


        for (let j = 1; j < 11; j++){
            let col = document.createElement("td");
            let data = document.createTextNode(" " + i*j);
            col.appendChild(data);
            row.appendChild(col);
        }
        table.appendChild(row);
    }

    target.appendChild(table);

})();

//

