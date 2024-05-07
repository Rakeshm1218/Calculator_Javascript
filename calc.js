let currentDisplay = '';

function appendToDisplay(value) {
  currentDisplay += value;
  document.getElementById('display').value = currentDisplay;
}

function calculate() {
  try {
    let result = eval(currentDisplay);
    document.getElementById('display').value = result;
    currentDisplay = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentDisplay = '';
  }
}

function clearDisplay() {
  currentDisplay = '';
  document.getElementById('display').value = '';
}
