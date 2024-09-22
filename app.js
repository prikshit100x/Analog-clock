// let hr =document.getElementById('hour')
// let min =document.getElementById('min')
// let sec =document.getElementById('sec')


// function displayTime(){
// let date =new Date();
// let hh =date.getHours();
// let mm =date.getMinutes();
// let ss =date.getSeconds();

// let hrRotation = 30*hh + mm/2;
// let mRotation = 6*mm;
// let sRotation =6*ss;

// hr.style.transform = `rotate(${hrRotation}deg)`;
// min.style.transform = `rotate(${mRotation}deg)`;
// sec.style.transform = `rotate(${sRotation}deg)`;

// }
// setInterval(displayTime,1000)

let hour = document.getElementById('hour'); // Use 'hour' for consistency
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // Calculate rotations with correct factors
  let hrRotation = 30 * hh + mm / 2; // 30 degrees per hour + 0.5 degree per minute for hour hand
  let minRotation = 6 * mm; // 6 degrees per minute for minute hand
  let secRotation = 6 * ss; // 6 degrees per second for second hand

  // Set transformations for each hand
  hour.style.transform = `rotate(${hrRotation}deg)`;
  min.style.transform = `rotate(${minRotation}deg)`;
  sec.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000); // Update every 1 second