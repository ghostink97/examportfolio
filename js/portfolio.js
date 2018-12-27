let button=document.querySelector("#music");
let sound=document.querySelector(".sound");
let lola=document.querySelector("#lola");

button.addEventListener("click", playmusic);
function playmusic(){
    sound.play();
}

lola.addEventListener("click", lolaclicked);

function lolaclicked(){
    lola.classList.add("clicky");
}