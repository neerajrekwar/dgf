// javascript

window.onresize = screen;
window.onload = screen;

function screen() {
  myWidth = window.innerWidth;
  myHeight = window.innerHeight;

  document.getElementById("screen-fit").innerHTML =
    "Screen: " + myWidth + "x" + myHeight + " px";
}

function startTime() {
  const today = new Date();
  // let d = today.getMonth()+1;
  let now = new Date().toLocaleDateString('en-uk', { weekday: "long", month: "short", day: "numeric" });
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('txt').innerHTML = now + " " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}
