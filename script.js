
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let expression = '';
let answer = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === 'C') {
      expression = '';
      answer = 0;
      display.innerText = answer;
    } else if (buttonText === '=') {
      try {
        answer = eval(expression);
        display.innerText = answer;
        expression = answer.toString();
      } catch {
        display.innerText = 'Error';
        expression = '';
        answer = 0;
      }
    } else {
      expression += buttonText;
      display.innerText = expression;
    }
  });
});
