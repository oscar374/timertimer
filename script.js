let startTime = new Date();
let endTime = new Date();
let currentTime = new Date();
let remainingTime = 0;

let isOn = false;

function startTimer(){
    console.log("Timer started");
    let minutesToEnd = parseInt(document.querySelector(".time").value, 10);
    let hours = document.querySelector(".startHour");
    let minutes = document.querySelector(".startMinute");

    startTime = new Date();
    startTime.setHours(hours.value);
    startTime.setMinutes(minutes.value);
    startTime.setSeconds(0);
    startTime.setMilliseconds(0);
    
    endTime = new Date(startTime.getTime() + minutesToEnd * 60000);

    isOn = true;
}

setInterval(() => {
    if (isOn) {
        currentTime = new Date();
        console.log("Current Time: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds());
        if (currentTime >= startTime) {
            calculate();
            display();
        }
    }
}, 20);

function calculate(){
    remainingTime = endTime - currentTime;
}

function display(){
    document.querySelector(".startInfo").innerHTML = "Start Time: " + startTime.toLocaleTimeString();
    document.querySelector(".endInfo").innerHTML = "End Time: " + endTime.toLocaleTimeString();
    document.querySelector(".remainingInfo").innerHTML = "Remaining Time: " + Math.floor(remainingTime / 60000) + " MINUTES " + Math.floor((remainingTime % 60000) / 1000) + " SECONDS";
}