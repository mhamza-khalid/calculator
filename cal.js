
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let decimal = document.querySelector('#dot');

let clear = document.querySelector('#clear');
let backspace = document.querySelector('#delete');

let buttons = document.querySelectorAll('button');

let result = document.querySelector('.result');
let upperDisplay = document.querySelector('.upperDisplay')

let operatorFlag = false;  // true when we need to start taking in 2nd operrand after operator is hit
let secondOperator = false;  // if user enters multi pair expressions eg 2+3-5*7 secondOperator becomes true
let equalFlag = false;      // if equal is hit, it becomes true
let lockOperator = true;  // disables operator until first opperand in entered

let operatorCount = 0;
let operatorCheckCount = 0;  // equals 1 if an operator has been clicked and waiting for 
                            // next number input, ensures 2 operators arent typed twice
let decimalCount = 0;       //ensures user dosent type 2 or more dots in a row or string    

let firstOp = '';    //the 2 operands and 1 operator
let secondOp= '';
let operator = '';

let tempResult = '';  //in case of multi expression eg 2+3-5; 2+3 goes in tempResult and so on
 
let output = '';  //final result 



numbers.forEach((number)=>{

//if user enters operator, operatorFlag becomes true so we start taking in 2nd opperand
//if user enters second operator like in 2+3-5, we put result in first op and wait for 2nd op

    number.addEventListener('click', ()=>{
        if(secondOperator == false && operatorFlag == false && equalFlag == false){
            operatorCheckCount=0;
            firstOp += number.id;
            populateDisplay(firstOp);
            populateUpperDisplay();
            lockOperator = false;
        }
        else if(secondOperator == false && operatorFlag == true && equalFlag == false){
            operatorCheckCount=0;
            secondOp += number.id;
            populateDisplay(secondOp);
            populateUpperDisplay();
        }
        else if(secondOperator == true && operatorFlag == true && equalFlag == false){
            operatorCheckCount=0;
            firstOp = tempResult;
            secondOp += number.id;
            populateDisplay(secondOp);
            populateUpperDisplay();
        }
        else if(equalFlag == true){
            operatorCheckCount=0;
            equalFlag = false;
            operatorFlag = false;
            secondOperator = false;
            equalFlag = false;
            operatorCount = 0;
            firstOp = '';
            secondOp= '';
            operator = '';
            tempResult = '';
            output = '';
            firstOp += number.id;
            populateDisplay(firstOp);
            populateUpperDisplay();
        }
    })
})

decimal.addEventListener('click', ()=>{
    if(operatorFlag == false && decimalCount == 0){
        firstOp += '.';
        ++decimalCount;
        populateDisplay(firstOp);
        populateUpperDisplay();
    }
    else if(operatorFlag == true && decimalCount == 0){
        secondOp += '.';
        ++decimalCount;
        populateDisplay(secondOp);
        populateUpperDisplay();
    }
})

backspace.addEventListener('click', ()=>{
    if(operatorFlag == false && equalFlag == false && operatorCheckCount == 0){
        firstOp = firstOp.slice(0,-1);
        populateDisplay(firstOp);
        populateUpperDisplay();
    }
    else if(operatorFlag == true && equalFlag == false && operatorCheckCount == 0){
        secondOp = secondOp.slice(0,-1);
        populateDisplay(secondOp);
        populateUpperDisplay();
    }
})
operators.forEach((operatorIn)=>{

    operatorIn.addEventListener('click', ()=>{

        decimalCount = 0;
        if(operatorCheckCount < 1 && lockOperator == false){

            ++operatorCheckCount;
            operatorFlag = true;
            ++operatorCount;
            if(operatorCount > 1){
                secondOperator = true;
                tempResult = operate(firstOp, secondOp, operator);
                populateDisplay(tempResult);
                secondOp = '';
            }
            else {populateDisplay(operatorIn.id)}
            operator = operatorIn.id;
            equalFlag = false;
            populateDisplay(operatorIn.id)
            upperDisplay.textContent = tempResult + operator;

        }
        else if (lockOperator == true){
            firstOp = 0;
            operatorFlag = true;
            operator = operatorIn.id;
            upperDisplay.textContent = firstOp + operator;
            ++operatorCount;
            lockOperator = false;
        }
    })
})


clear.addEventListener('click', reset)

function reset(){
        operatorCheckCount=0;
        equalFlag = false;
        operatorFlag = false;
        secondOperator = false;
        equalFlag = false;
        lockOperator = true;
        operatorCount = 0;
        decimalCount = 0;
        firstOp = '';
        secondOp= '';
        operator = '';
        tempResult = '';
        output = '';
        populateDisplay('');
        upperDisplay.textContent = '';
}

equal.addEventListener('click', ()=>{

    if (firstOp === '' || secondOp == '' || operator == ''){ return }
    else{
    tempResult = operate(firstOp, secondOp, operator);
    populateDisplay(tempResult);
    equalFlag = true;
    populateUpperDisplay();
    operatorCheckCount=0;
    }
 })
    
    

function populateDisplay(input){

    result.textContent = '';
    result.textContent += input;
}


function populateUpperDisplay(){

    if(equalFlag == false){
    upperDisplay.textContent = firstOp + operator;
    }
    else if (equalFlag == true){
        upperDisplay.textContent = firstOp + operator + secondOp + '=';
    }

}

function add(a, b){

    a = parseFloat(a);   //parse is here to convert string to integer to avoid 
    b = parseFloat(b);   //string concatenation
    return a+b;

}

function subtract(a, b){

    a = parseFloat(a);
    b = parseFloat(b);
    return a-b;

}

function multiply(a, b){

    a = parseFloat(a);
    b = parseFloat(b);
    return a*b;

}

function divide(a, b){

    a = parseFloat(a);
    b = parseFloat(b);
    if (b == 0){
        alert('Cant divide by zero!')
        reset();
        return '';
    }
    else{
        return a/b;
    }
    

}

function operate (firstOpperand, secondOpperand, operator){
    

    if (operator == '+'){  return add(firstOpperand,secondOpperand)}
    
    else if (operator == '-') { return subtract(firstOpperand, secondOpperand) }

    else if (operator == '*') { return multiply(firstOpperand, secondOpperand)}

    else if (operator == '÷') { return divide(firstOpperand, secondOpperand)}

}

















