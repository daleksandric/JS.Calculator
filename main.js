let expression = '';

function inputNumber(number) {
    let display = document.getElementById("display");

    if( display ) {
        expression += number;
        display.value = expression; 
    }
}

function inputOperator(operator) {
    let display = document.getElementById("display");
    
    if( display ) {
        let lastChar = expression[expression.length - 1];
        if ( !isNaN(parseInt(lastChar))) {
            expression += operator;
            display.value = expression; 
        }
    }
}

function getResult() {
    let display = document.getElementById("display");

    if(display) {
        let lastChar = expression[expression.length - 1];
        if ( !isNaN(parseInt(lastChar))) {
            expression = eval(expression).toString();
            display.value = expression;
        }
    }
}
