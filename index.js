//Sithika Buddy

// const secondsDiv = document.getElementById('seconds');
// const minutesDiv = document.getElementById('minutes');
// const hoursDiv = document.getElementById('hours');
// const ampmDiv = document.getElementById('ampm');

// let seconds = new Date().getSeconds();
// let hours = new Date().getHours();
// let minutes = new Date().getMinutes();

// setInterval(() => {
//   seconds++;
//   if (seconds > 60) {
//     seconds = 0;
//     minutes++;
//   }
//   if (minutes > 60) {
//     minutes = 0;
//     hours++;
//   }
//   if (minutes.toString().length < 2) {
//     minutes = '0' + minutes.toString();
//   }
//   if (seconds.toString().length < 2) {
//     seconds = '0' + seconds.toString();
//   }
//   if (hours.toString().length < 2) {
//     hours = '0' + hours.toString();
//   }
//   hoursDiv.innerText = hours;
//   minutesDiv.innerText = minutes;
//   secondsDiv.innerText = seconds;
// }, 1000);

// if (hours > 12) {
//   ampmDiv.innerText = 'PM';
// } else {
//   ampmDiv.innerText = 'AM';
// }

// Javascript King YT

const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';

  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
