(function() {

    document.getElementById("run").addEventListener("click", function() {
        let randomBackgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomBackgroundColor;
    });

})();