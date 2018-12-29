let button=document.querySelector("#music");
let sound=document.querySelector(".sound");
let lola=document.querySelector("#lola");

lola.addEventListener("click", PlayLola);

function PlayLola(){
    lola.classList.toggle("clicked");
}


button.addEventListener("click", playmusic);
function playmusic(){
    sound.play();
}

