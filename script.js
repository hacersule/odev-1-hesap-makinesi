let inputElement = document.getElementById('input');

function appendToInput(value) {
  inputElement.value += value;
}

function clearInput() {
  inputElement.value = '';
}

function calculate() {
  try {
    inputElement.value = eval(inputElement.value).toString();
  } catch (error) {
    inputElement.value = 'Error';
  }
}
