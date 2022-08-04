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
    } else if (operator == '*') {
        result = multiply(first, second);
    }

    return result;
}

const display = document.querySelector('.screenVal');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let symbol = '';
        let value = button.innerText.toLowerCase();
        if (value == 'clear') {
            display.textContent = '';
        } else if (value == 'x' || value == '+' || value == '-' || value == '/') {
            symbol = value;
            console.log(symbol);
            display.textContent = '';
        }
        else { 
            //console.log(value);
            display.textContent += value;
        }

    })
})