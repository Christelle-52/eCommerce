let boutonPlus = document.getElementById('boutonPlus');
let boutonMoins = document.getElementById('boutonMoins');
let inputValue = document.getElementById('quantity');

boutonPlus.addEventListener('click', () => {
  inputValue.value = Number(inputValue.value) + 1;
  // console.log(inputValue);
});

boutonMoins.addEventListener('click', () => {
  if (Number(inputValue.value) != "1") {
    inputValue.value = Number(inputValue.value) - 1;
  }
  else {
    inputValue.value = Number(inputValue.value);
  }
});



