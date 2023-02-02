const secondsDiv = document.getElementById('seconds');
const minutesDiv = document.getElementById('minutes');
const hoursDiv = document.getElementById('hours');
const ampmDiv = document.getElementById('ampm');

let seconds = new Date().getSeconds();
let hours = new Date().getHours();
let minutes = new Date().getMinutes();

setInterval(() => {
  seconds++;
  if (seconds > 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 60) {
    minutes = 0;
    hours++;
  }
  if (minutes.toString().length < 2) {
    minutes = '0' + minutes.toString();
  }
  if (seconds.toString().length < 2) {
    seconds = '0' + seconds.toString();
  }
  if (hours.toString().length < 2) {
    hours = '0' + hours.toString();
  }
  hoursDiv.innerText = hours;
  minutesDiv.innerText = minutes;
  secondsDiv.innerText = seconds;
}, 1000);

if (hours > 12) {
  ampmDiv.innerText = 'PM';
} else {
  ampmDiv.innerText = 'AM';
}
