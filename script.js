const toggle = document.getElementById('toggle');
const mode = document.getElementById('mode');
const noir = document.getElementById('noir');
let audio = document.querySelector('audio');
toggle.addEventListener('change', (e)=> {
    document.body.classList.toggle("dark", e.target.checked);
    mode.innerText="Light";
    noir.innerText="ça va être tout noir !"
    audio.pause();
    audio.currentTime = 0;
    if(document.body.classList == "dark",e.target.checked){
        mode.innerText ="Dark";
        noir.innerText="Ta G***** !"
        audio.play();
    }
    
});
