let input = '';
let operands = [];
const output = document.querySelector('#output > p');

display();

function display() {
    const buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (button.textContent == 'C') {
                output.textContent = '0';
                operands = [];
                input = '';
            }
            else if (button.textContent.match(/[1-9]/)) {
                if (operands.length == 1) {
                    operands = [];
                    input = '';
                }
                output.textContent = button.textContent;
                input += button.textContent;
            }
            else if (output.textContent == '0' && button.textContent == '.') {
                output.textContent += '.';
                input += '0';
            }
            else if (input.length > 0) {
                if (button.textContent.match(/=/)) {
                    operands.push(parseInt(input));
                    operate(operands[1], operands[0], operands[2]);
                    input = operands[0];
                }
                else if (button.textContent.match(/\W/)) {
                    operands.push(parseInt(input));
                    operands.push(button.textContent);
                    input = '';
                }
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
            operands.push(add(num1, num2));
            break;
        case '-':
            output.textContent = subtract(num1, num2);
            operands = [];
            operands.push(subtract(num1, num2));
            break;
        case '*':
            output.textContent = multiply(num1, num2);
            operands = [];
            operands.push(multiply(num1, num2));
            break;
        case '/':
            output.textContent = divide(num1, num2);
            operands = [];
            operands.push(divide(num1, num2));
            break;
    }
}