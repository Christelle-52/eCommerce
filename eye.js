let eyeOn = document.querySelectorAll('.feather-eye');
let eyeOff = document.querySelectorAll('.feather-eye-off');
let passwordField = document.querySelectorAll("input[type=password]");

eyeOn[0].addEventListener('click', (e) => {
  e.preventDefault();
  eyeOn[0].style.display = "none";
  eyeOff[0].style.display = "block";
  passwordField[0].type = "text";
});

eyeOff[0].addEventListener('click', (e) => {
  e.preventDefault();
  eyeOff[0].style.display = "none";
  eyeOn[0].style.display = "block";
  passwordField[0].type = "password";
});

eyeOn[1].addEventListener('click', (e) => {
  e.preventDefault();
  eyeOn[1].style.display = "none";
  eyeOff[1].style.display = "block";
  passwordField[1].type = "text";
});

eyeOff[1].addEventListener('click', (e) => {
  e.preventDefault();
  eyeOff[1].style.display = "none";
  eyeOn[1].style.display = "block";
  passwordField[1].type = "password";
});
