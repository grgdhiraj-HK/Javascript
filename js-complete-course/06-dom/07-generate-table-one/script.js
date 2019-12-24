/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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

   table.style.width = "100%";

    target.appendChild(table);

    for (let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        tr.style.height = "30px";
       table.appendChild(tr);
        tr.appendChild(td);
        console.log("test");
    }

})();