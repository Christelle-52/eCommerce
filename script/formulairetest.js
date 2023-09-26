form = document.getElementById('formulaire');
// let verifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// let verifPassword = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z]) (?=.*[^\w\d\s])).{8,}$/.test(password);

inputText = document.querySelectorAll('input[type="text"]');
// inputPass = document.querySelectorAll('input[type="password"]');
let eyeOn = document.querySelectorAll('.fa-eye');
let eyeOff = document.querySelectorAll('.fa-eye-slash');
// passwordField1 = document.getElementById("inputPassword1");
// passwordField2 = document.getElementById("inputPassword2");

let testChampText = function testerChampText() {
  inputText.forEach(function (inputValue) {
    if (inputValue.value < 3) {
      inputValue.value = "3 caractères minimum";
      inputValue.style.color = "red";
      inputValue.style.boxShadow = "5px 5px 5px red";
    }
    else {
      return true;
    };
  });
};

let testChampPass = function testerChampPass() {
  inputPass = document.querySelectorAll('input[type="password"]');

  inputPass.forEach(function (inputValue) {
    if (inputValue.value === '') {
      this.type = "text";
      this.value = "5 car mini, 1 Maj, 1 car spécial et 1 chiffre";
      this.style.color = "red";
      this.style.boxShadow = "5px 5px 5px red";
    }
    else {
      return true;
    };
  });
};

function resetChamp() {
  inputPass.forEach(function (resetValue) {
    resetValue.value = "";
    resetValue.type = "password";
    resetValue.style.color = "black";
    resetValue.style.boxShadow = "none"; 
  });
  inputText.forEach(function (resetValue) {
    resetValue.value = "";
    resetValue.style.color = "black";
    resetValue.style.boxShadow = "none"; 
  });
}

function eye() {
  inputPass = document.getElementsByName('required');

  for (let i = 0; i < eyeOn.length; i++) {
    eyeOn[i].addEventListener('click', () => {
      eyeOn[i].style.display = "none";
      eyeOff[i].style.display = "block";
      inputPass[i].type = "text";
    });
  }
  
  for (let i = 0; i < eyeOff.length; i++) {
    eyeOff[i].addEventListener('click', () => {
      eyeOff[i].style.display = "none";
      eyeOn[i].style.display = "block";
      inputPass[i].type = "password";
    });
  }
  }
  

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêcher le formulaire de se soumettre normalement
  if (!testChampText && !testChampPass) {
      resetChamp();
  }
  else {
    eye();
    return true;
  }
});

// form.addEventListener('click', function () {
//   eye();
// });




