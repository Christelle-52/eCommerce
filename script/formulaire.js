let form = document.getElementById('formulaire');
// let verifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
// let verifPassword = /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z]) (?=.*[^\w\d\s])).{8,}$/.test(password);

inputText = document.querySelectorAll('input[type="text"]');
inputPass = document.querySelectorAll('input[type="password"]');

function testerChampText() {
  inputText.forEach(function (inputValue) {
    if (inputValue.value < 3) {
      inputValue.value = "3 caractères minimum";
      inputValue.style.color = "red";
      inputValue.style.boxShadow = "5px 5px 5px red";
    }
    else {
      return false;
    };
  });
};

function testerChampPass() {
  inputPass.forEach(function (inputValue) {
    if (inputValue.value === '' || !verifPassword) {
      inputValue.type = "text";
      inputValue.value = "5 car mini, 1 Maj, 1 car spécial et 1 chiffre";
      inputValue.style.color = "red";
      inputValue.style.boxShadow = "5px 5px 5px red";
    }
    else {
      return false;
    };
  });
};

function resetChamp() {
  inputPass.forEach(function (resetValue) {
    // resetValue.value = "";
    // resetValue.type = "password";
    resetValue.style.color = "black";
    resetValue.style.boxShadow = "none"; 
  });
  inputText.forEach(function (resetValue) {
    // resetValue.value = "";
    resetValue.style.color = "black";
    resetValue.style.boxShadow = "none"; 
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêcher le formulaire de se soumettre normalement
  testerChampText();
  testerChampPass();
});

form.addEventListener('click', function () {
  resetChamp();
});




