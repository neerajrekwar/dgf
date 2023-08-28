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


// ran pass

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

const generateButton = document.getElementById("generateButton");
const passwordLengthInput = document.getElementById("passwordLength");
const generatedPassword = document.getElementById("generatedPassword");

generateButton.addEventListener("click", function() {
  const length = parseInt(passwordLengthInput.value);
  if (!isNaN(length) && length > 0) {
    const newPassword = generatePassword(length);
    generatedPassword.textContent = "Generated Password: " + newPassword;
  } else {
    generatedPassword.textContent = "Please enter a valid password length.";
  }
});


// test

const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};