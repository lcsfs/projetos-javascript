'use strict';

const display = document.getElementById('display');
const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll("[id*=Operator]");

let newNumber = true;
let operator;
let prevNumber;

const pendingOperator = () => operator !== undefined

const calculation = () => {
  if (pendingOperator()) {
    const actualNumber = parseFloat(display.textContent.replace(',', '.'));
    newNumber = true;
    const result = eval (`${prevNumber}${operator}${actualNumber}`)
    attDisplay(result)
  }
}

const attDisplay = (textDisplay) => {
  if (newNumber) {
    display.textContent = textDisplay;  
    newNumber = false;
  } else {
  display.textContent += textDisplay;
  }
}

const numberDisplay = (e) => attDisplay(e.target.textContent);
numbers.forEach(num => num.addEventListener('click', numberDisplay));

const selectOperator = (e) => {
  if(!newNumber) {
    calculation()
    newNumber = true;
    operator = e.target.textContent;
    prevNumber = parseFloat(display.textContent.replace(',','.'));
    console.log(operator);
  }
}

operators.forEach (operator => operator.addEventListener('click', selectOperator));

const activeEqual = () => {
  calculation();
  operator = undefined;
}

document.getElementById('equal').addEventListener('click', activeEqual);

const cleanDisplay = () => display.textContent = '';
document.getElementById('cleanDisplay').addEventListener('click', cleanDisplay);

const cleanCalculation = () => {
  cleanDisplay();
  operator = undefined;
  newNumber = true;
  prevNumber = undefined;
}
document.getElementById('cleanCalculation').addEventListener('click', cleanCalculation);

const removeLastNumber = () => display.textContent = display.textContent.slice(0, -1)
document.getElementById('backspace').addEventListener('click', removeLastNumber);

const existDecimal = () => display.textContent.indexOf(',') !== -1;
const existValue = () => display.textContent.length > 0;

const insertDecimal = () => {
  if (!existDecimal()) {
    if (existValue()) {
      attDisplay(',');
    } else {
      attDisplay('0,');
    }
  }
}

document.getElementById('decimal').addEventListener('click', insertDecimal);

const keyMap = {
  '0': "key0",
  '1': "key1",
  '2': "key2",
  '3': "key3",
  '4': "key4",
  '5': "key5",
  '6': "key6",
  '7': "key7",
  '8': "key8",
  '9': "key9",
  '/': "divOperator",
  '*': "multOperator",
  '-': "subOperator",
  '+': "addOperator",
  '=': "equal",
  'Enter': "equal",
  'Backspace': 'backspace',
  'c': 'cleanDisplay',
  'Escape': 'cleanCalculation',
  ',': 'decimal'
};

const mapKeyboard = (e) => {
  const keyNumber = e.key;
  const keyAllowed = () => Object.keys(keyMap).indexOf(keyNumber) !== -1
  if (keyAllowed()) document.getElementById(keyMap[keyNumber]).click();
}
document.addEventListener('keydown', mapKeyboard);