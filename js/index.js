let content2 = document.getElementById('content-2');
let textHtml = '<b>Hellow How do you do do?</b>';
content2.innerHTML = textHtml;

let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message')

function showMessage() {
    message.innerHTML = 'Time Out!!';
}

discountButton.addEventListener('click', showMessage)


let numberInput = document.getElementById("number-input");
let runButton = document.getElementById("run-button");
let output = document.getElementById("output");

function printMult() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    if (number === 0) {
        output.innerHTML = 'No!!';
        return;
    }

    for (let i = 1; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    output.innerHTML = outputHtml;
}

runButton.addEventListener('click', printMult)