let eyeOn = document.querySelectorAll('.feather-eye');
let eyeOff = document.querySelectorAll('.feather-eye-off');
let passwordField = document.querySelectorAll("input[type=password]");

for (let i = 0; i < eyeOn.length; i++) {
  eyeOn[i].addEventListener('click', (e) => {
    e.preventDefault();
    eyeOn[i].style.display = "none";
    eyeOff[i].style.display = "block";
    passwordField[i].type = "text";
  });
}

for (let i = 0; i < eyeOn.length; i++) {
  eyeOff[i].addEventListener('click', (e) => {
    e.preventDefault();
    eyeOff[i].style.display = "none";
    eyeOn[i].style.display = "block";
    passwordField[i].type = "password";
  });
}

