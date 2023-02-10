let goButton = document.getElementsByClassName("start-button").item(0);
let moon = document.getElementById("moon");
let rocket = document.getElementById("rocket");
let ready = document.getElementsByClassName("ready").item(0);
let title = document.getElementsByTagName("h1").item(0);


title.children[2].addEventListener("animationend", (e) => {
    if (e.animationName === "disparition") title.style.display = "none";
});

['click'].forEach(event => {
    document.addEventListener(event, function (e) {
        console.log(e)
        goButton.classList.add("turn-around");
        moon.classList.add("moon-landing");
        rocket.classList.add("rocket-landing");
        ready.classList.add("disparition");
    })
});

rocket.addEventListener("animationend", (e) => {
    if (e.animationName === "rocket-landing") {
        displayEmail();
    }
});


