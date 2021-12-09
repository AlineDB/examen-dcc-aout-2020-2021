// Nom    :
// Prénom :
// Groupe :
let intervalId = null;
const eStart = document.querySelector('.app__controls__start');
const eLap = document.querySelector('.app__controls__lap');
const eTimer = document.querySelector('.app__timer');
const affichageTour = document.querySelector('.app__laps');
const arrayTour = [];
let milliseconds = 0;
let seconds = 57;
let minutes = 0;
let lapCount = 1;

let zeroSecond;
let zeroMinute;
let zeroMilli;

function timer(){
    zeroMinute=`${minutes}`.padStart(2,0);
    zeroSecond=`${seconds}`.padStart(2,0);
    zeroMilli=`${milliseconds}`.padStart(2,0);
    return `${zeroMinute}:${zeroSecond}:${zeroMilli}`;
}

function updateTime() {
    milliseconds++;
    if(milliseconds === 100){
        seconds++;
        milliseconds = 0;
    }
    if (seconds === 60){
        minutes++;
        seconds = 0;
    }
    eTimer.textContent=timer();
}


function start(){
    eStart.addEventListener('click', (event)=>{
        if(intervalId === null){
            intervalId = setInterval(updateTime, 10);
            event.currentTarget.textContent = 'Stop';
        } else{
            clearInterval(intervalId);
            intervalId=null;
            event.currentTarget.textContent = 'Démarrer';
        }
    });
    eLap.addEventListener('click', (event)=>{
    arrayTour.push(timer());
    for (let i = lapCount; i <= arrayTour.length; i++){
        let lap = arrayTour[i-1];
        let liste = document.createElement('li');
        liste.className='app__lap';
        liste.textContent=lap;
        affichageTour.insertAdjacentElement('beforeend', liste);
        lapCount = i+1;
        }
    });
}
start();


