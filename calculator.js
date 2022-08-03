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