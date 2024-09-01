const allButtons = document.querySelectorAll('button');
const inputField = document.getElementById('result');
const operators = ['+', '-', '*', '/'];

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
        const buttonValue = allButtons[i].textContent;
        const lastChar = inputField.value.slice(-1);

        if (buttonValue === "AC") {
            inputField.value = '';
        }
        else if (buttonValue === "=") {
            if (inputField.value && !operators.includes(lastChar)) {
                inputField.value = eval(inputField.value);
            }
        }
        else if (operators.includes(buttonValue) && operators.includes(lastChar)) {
        }
        else {
            inputField.value += buttonValue;
        }
    })
}
