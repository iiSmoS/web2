const redLight = document.querySelector(".redLight");
const orangeLight = document.querySelector(".orangeLight");
const greenLight = document.querySelector(".greenLight");

redLight.style.backgroundColor = "red";

let phase = 1;

setInterval(() => {
    if (phase === 1) {
        orangeLight.style.backgroundColor = "orange";
        redLight.style.backgroundColor = "white";
    }
    if (phase === 2) {
        greenLight.style.backgroundColor = 'green';
        orangeLight.style.backgroundColor = 'white';
    }
    if (phase === 3) {
        orangeLight.style.backgroundColor = 'orange';
        greenLight.style.backgroundColor = 'white';
    }
    if (phase === 4){
        redLight.style.backgroundColor = 'red';
        orangeLight.style.backgroundColor = 'white';
        phase = 0;
    }
    phase++;
}, 1000);

  