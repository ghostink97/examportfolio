let button=document.querySelector("#music");
let sound=document.querySelector(".sound");
let soundPlaying = false;

button.addEventListener("click", controlMusic);
function controlMusic(){
    if (soundPlaying == false){
    sound.play();
    soundPlaying = true;
    }
    else{
        sound.pause();
        soundPlaying = false;
    }
}
/*I'll ask julio on how to toggle the sound because GRADES*/