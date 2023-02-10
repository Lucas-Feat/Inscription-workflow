let goButton = document.getElementsByClassName("start-button").item(0);
let moon = document.getElementById("moon");
let rocket = document.getElementById("rocket");
let ready = document.getElementsByClassName("ready").item(0);
goButton.addEventListener("click", function () {
    goButton.classList.add("turn-around");
    moon.classList.add("moon-landing");
    // rocket.classList.add("rocket-landing");
    // ready.classList.add("disparition");
});
