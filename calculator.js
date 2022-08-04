function add (first, second) {
    result = first + second;
    return result;
}

function subtract (first, second) {
    result = first - second;
    return result;
}

function divide (first, second) {
    result = first / second;
    return result;
}

function multiply (first, second) {
    result = first * second;
    return result;
}

function operate (first, operator, second) {
    let result = 0;
    if (operator == '+') {
        result = add(first, second);
    } else if (operator == '-') {
        result = subtract(first, second);
    } else if (operator == '/') {
        result = divide(first, second);
    } else if (operator == 'x') {
        result = multiply(first, second);
    }

    return result;
}

const display = document.querySelector('.screenVal');

const buttons = document.querySelectorAll('button');

let value1 = '';
let value2 = '';
let symbol = '';
let final = ''

buttons.forEach((button) => {

  
    let value = button.innerText.toLowerCase();

    button.addEventListener('click', () => {
        if (value == 'clear') {
            display.textContent = '';
            value1 = '';
        } else if (value == 'x' || value == '+' || value == '-' || value == '/') {
            symbol = value;
            value2 = value1;
            //console.log("Val 2 = " + value2);
            value1 = '';
            display.textContent = '';
        } else if (value == '=') {
            display.textContent = '';
            final = operate(Number(value2), symbol, Number(value1));
            display.textContent = final;
            value1 = final;
        }
        else { 
            display.textContent += value;
            value1 += value;
            //console.log("Val 1 is " + value1);
        }

    })
})