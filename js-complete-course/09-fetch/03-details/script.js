/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function(){
        document.getElementById('target').innerHTML= "";


        fetch("http://localhost:63342/js-complete-course/_shared/api.json")
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data.heroes);
                let template = document.getElementById("tpl-hero").content.cloneNode(true);
                let i = document.getElementById("hero-id").value;
                template.querySelector(".name").innerHTML = data.heroes[i-1].name;
                template.querySelector(".alter-ego").innerHTML = data.heroes[i-1].alterEgo;
                template.querySelector(".powers").innerHTML = data.heroes[i-1].abilities;

                document.getElementById("target").appendChild(template);
            })
    })
})();
