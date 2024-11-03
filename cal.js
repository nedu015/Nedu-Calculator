

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');


    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
     
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput && previousInput) {
                    calculate();
                }
            } else {
                if (['+', '-', '*', '/', '^'].includes(value)) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                } else {
                    currentInput += value;
                }
            }

            display.value = currentInput;
        });
    });

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
                case '^':
                    result = prev ^ current;
                    break;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        display.value = currentInput;
    }
});    
