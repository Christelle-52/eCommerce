let formulaire = document.getElementById('formulaire');
console.log(formulaire);


formulaire.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêcher le formulaire de se soumettre normalement

  var inputs = this.getElementsByTagName('input');
  console.log(inputs);

  for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === 'text' && inputs[i].value === '') {
          inputs[i].value = "Veuillez remplir ce champ";
        // inputs[i].style.color = "red";
        // inputs[i].style.boxShadow = "red";

          inputs[i].addEventListener('click', function () {
              this.value = '';
              this.style.color = "black";
          });
      }
      else {
        return true;
    }
  }
});

// function inputValide(valeurInput) {
//   const input = 
//input.className = "valide";
// }