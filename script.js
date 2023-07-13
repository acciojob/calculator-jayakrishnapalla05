
const display = document.getElementById('input');

// Get all the number buttons and add event listeners
const numberButtons = document.querySelectorAll('.block');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Get the decimal button and add event listener
const decimalButton = document.getElementById('dot');
decimalButton.addEventListener('click', () => {
  if (!display.value.includes('.')) {
    display.value += decimalButton.textContent;
  }
});

// Get all the operator buttons and add event listeners
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Get the equal button and add event listener
const equalButton = document.getElementById('ans');
equalButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
});

// Get the clear button and add event listener
const clearButton = document.getElementById('clr');
clearButton.addEventListener('click', () => {
  display.value = '';
});
