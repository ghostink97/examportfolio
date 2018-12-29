let button=document.querySelector("#music");
let sound=document.querySelector(".sound");


button.addEventListener("click", playmusic);
function playmusic(){
    sound.play();
}