let input = '';
let operands = [];
const output = document.querySelector('#output > p');

display();

function display() {
    const buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (button.textContent == 'C') {
                output.textContent = '';
                operands = [];
                input = '';
            }
            else if (input.length >= 0 && button.textContent.match(/[0-9]/)) {
                if (input.length == 0) {
                    output.textContent = '';
                }
                output.textContent += button.textContent;
                input += button.textContent;
            }
            else if (input.length > 0 && button.textContent.match(/=/)) {
                operands.push(parseInt(input));
                operate(operands[1], operands[0], operands[2]);
                input = '';
            }
            else if (input.length > 0 && button.textContent.match(/\W/)) {
                operands.push(parseInt(input));
                operands.push(button.textContent);
                output.textContent += button.textContent;
                input = '';
            }
        });
    }   
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
            output.textContent = add(num1, num2);
            operands = [];
            operands = add(num1, num2);
            break;
        case '-':
            output.textContent = subtract(num1, num2);
            operands = [];
            operands = subtract(num1, num2);
            break;
        case '*':
            output.textContent = multiply(num1, num2);
            operands = [];
            operands = multiply(num1, num2);
            break;
        case '/':
            output.textContent = divide(num1, num2);
            operands = [];
            operands = divide(num1, num2);
            break;
    }
}