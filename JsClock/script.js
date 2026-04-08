const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const millis = now.getMilliseconds();

    const secondDegree =(((seconds + millis/1000)/ 60) * 360) + 90;
    const minuteDegree =((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegree = ((hours / 12)* 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);


