let errorMsg = "D1V1S10N 3RR0R"

function add (first, second) {
    result = first + second;
    return result;
}

function subtract (first, second) {
    result = first - second;
    return result;
}

function divide (first, second) {
    if (first == 0 || second == 0) {
        return errorMsg;
    } else {
        result = first / second;
        return result;
    }
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

    if (result % 1 == 0 ||result == errorMsg) {
        return result;
    } else {
        return result.toFixed(3);
    }
    
}

const display = document.querySelector('.screenVal');

const buttons = document.querySelectorAll('button');

let userIn = [];
let value1 = '';
let operator = '';
let result = '';
//let workOut = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        if (value == 'x' || value == '/' || value == '+' || value == '-' || value == '=') {
            
            if (value1 != 0 || value1 != '') {
                userIn.push(value1);
                value1 = '';
            }

            if (!(operator == '')) {
                result = operate(Number(userIn[userIn.length - 2]), operator, Number(userIn[userIn.length - 1]));
                if (result != 0) {
                    userIn.push(result);
                    display.textContent = result;
                }
                

            } 

            operator = value;
            
        } else if (value / value == 1 || value == 0 || value == '.') {
            value1 += value;
            display.textContent = value1;
        } else if (value == 'clear') {
            value1 = value = result = operator = '';
            userIn = [];
            display.textContent = '';
        } else if (value == 'Delete') {
            value1 = value1.slice(0, -1);
            display.textContent = value1;
        }

    })
  
})