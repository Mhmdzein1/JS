let [ minutes,seconds]=[0,0];
let watch= document.querySelector(".stopwatch");
let interval=null
let startEL= document.getElementById("start");
let pauseEL= document.getElementById("pause");
let resetEL= document.getElementById("reset");

startEL.addEventListener("click",
() =>{
    if (interval !==null){
        clearInterval(interval);
    }
    interval= setInterval(displayTimer,1000);
})

pause.addEventListener("click", () => {
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    [ minutes,seconds] = [0, 0];
    watch.innerHTML = "00 : 00 ";
}); 

function displayTimer() {
   seconds++
        if(seconds == 60) {
            seconds = 0;
            minutes++;
           
        }
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    watch.innerHTML = ` ${m} : ${s} `;
}