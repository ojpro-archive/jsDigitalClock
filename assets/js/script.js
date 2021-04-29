// Let's Start Coding
let $ = (el) => document.querySelector(el);
let clock = $("#clock");
function date() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (sec < 10) sec = "0" + sec;
  if (min < 10) min = "0" + min;
  if (hour < 10) hour = "0" + hour;
  clock.innerText = hour + ":" + min + ":" + sec;
}
let timer = setInterval(function () {
  date();
}, 1000);
