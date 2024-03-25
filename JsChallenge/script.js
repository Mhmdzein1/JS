let minutes = 0;
let seconds = 0;
let watch= document.querySelector(".stopwatch");
let interval=null
let startBtn= document.getElementById("start");
let pauseBtn= document.getElementById("pause");
let resetBtn= document.getElementById("reset");

startBtn.addEventListener("click", startTimer);

function startTimer() {
    if (interval !== null) {
        clearInterval(interval);
    }
    interval = setInterval(displayTimer, 1000);
}

pauseBtn.addEventListener("click", pauseTimer);

function pauseTimer() {
    clearInterval(interval);
};

resetBtn.addEventListener("click",resetTimer );
function resetTimer(){
    clearInterval(interval);
    [ minutes,seconds] = [0, 0];
    watch.innerHTML = "00 : 00 ";
}; 

function displayTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    watch.innerHTML = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    return `${m} : ${s}`;
}