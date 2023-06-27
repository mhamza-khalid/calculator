let num11 = '';    
let num22 = '';

let num_one;
let num_two;
let ope = '';

let secondNum = false;
let expression;
let finalResult = '';
let deleteStatus = true;

const decimal = document.getElementById('.');

const num0 = document.getElementById('0');
const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const num3 = document.getElementById('3');
const num4 = document.getElementById('4');
const num5 = document.getElementById('5');
const num6 = document.getElementById('6');
const num7 = document.getElementById('7');
const num8 = document.getElementById('8');
const num9 = document.getElementById('9');


const add = document.getElementById('+');
const subtract = document.getElementById('-');
const divide = document.getElementById('÷');
const multiply = document.getElementById('*');

const equal = document.getElementById('=');

const delete1 = document.querySelector('.delete');

const display1 = document.querySelector('.result');

const upperDisplay = document.querySelector('.upperDisplay');

const clear = document.querySelector('.clear');

delete1.addEventListener('click', ()=>{
  if(deleteStatus === false){
    return;
  }
  else if (deleteStatus === true){
    if(secondNum === false){
    num11 = num11.slice(0, num11.length - 1);
    display1.textContent = num11;
    }
    else if(secondNum === true){
      num22 = num22.slice(0, num22.length - 1);
      display1.textContent = num22;
    }
  }
});

clear.addEventListener('click', ()=> {
       num11='';
       num22='';
       ope = '';
       finalResult = '';
       expression = '';
       upperDisplay.textContent = '';
       display1.textContent = '';
       secondNum = false;
});

decimal.addEventListener('click', handle_decimal);
document.addEventListener('keydown', handle_decimal);

function handle_decimal(event){
if (event.keyCode === 190 || event.keyCode === 110 || event.type === 'click'){
     if (secondNum === false){
        if (num11.includes('.')){
        return
        }
        else{
            num11 = num11 + '.';
        }
        display1.textContent = num11;
      }
    else if(secondNum === true){
      if (num22.includes('.')){
        return
        }
        else{
            num22 = num22 + '.';
        }
        display1.textContent = num22;
  }
 }
 else return;
}

num0.addEventListener('click', handle_0);
document.addEventListener('keydown', handle_0)

function handle_0(event){
  if (event.keyCode === 48 || event.keyCode === 96 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '0'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '0';
    display1.textContent = num22;
  }
  }
  else return;
}

num1.addEventListener('click', handle_1);
document.addEventListener('keydown', handle_1)

function handle_1(event){
  if (event.keyCode === 49 || event.keyCode === 97 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '1'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '1';
    display1.textContent = num22;
  }
  }
  else return;
}

num2.addEventListener('click', handle_2);
document.addEventListener('keydown', handle_2)


function handle_2(event){
  if (event.keyCode === 50 || event.keyCode === 98 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '2'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '2';
    display1.textContent = num22;
  }
  }
  else return;
}

num3.addEventListener('click', handle_3);
document.addEventListener('keydown', handle_3)


function handle_3(event){
  if (event.keyCode === 51 || event.keyCode === 99 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '3'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '3';
    display1.textContent = num22;
  }
  }
  else return;
}

num4.addEventListener('click', handle_4);
document.addEventListener('keydown', handle_4)


function handle_4(event){
  if (event.keyCode === 52 || event.keyCode === 100 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '4'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '4';
    display1.textContent = num22;
  }
  }
  else return;
}

num5.addEventListener('click', handle_5);
document.addEventListener('keydown', handle_5)

function handle_5(event){
  if (event.keyCode === 53 || event.keyCode === 101 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '5'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '5';
    display1.textContent = num22;
  }
  }
  else return;
}

num6.addEventListener('click', handle_6);
document.addEventListener('keydown', handle_6)


function handle_6(event){
  if (event.keyCode === 54 || event.keyCode === 102 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '6'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '6';
    display1.textContent = num22;
  }
  }
  else return;
}

num7.addEventListener('click', handle_7);
document.addEventListener('keydown', handle_7)


function handle_7(event){
  if (event.keyCode === 55 || event.keyCode === 103 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '7'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '7';
    display1.textContent = num22;
  }
  }
  else return;
}


num8.addEventListener('click', handle_8);
document.addEventListener('keydown', handle_8)

function handle_8(event){
  if (event.keyCode === 56 || event.keyCode === 104 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '8'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '8';
    display1.textContent = num22;
  }
  }
  else return;
}

num9.addEventListener('click', handle_9);
document.addEventListener('keydown', handle_9)


function handle_9(event){
  if (event.keyCode === 57 || event.keyCode === 105 || event.type === 'click'){
  if(secondNum === false){
    num11 = num11 + '9'
    display1.textContent = num11;
  }
  else if (secondNum === true){
    num22 = num22 + '9';
    display1.textContent = num22;
  }
  }
  else return;
}



add.addEventListener('click', handle_add);
document.addEventListener('keydown', handle_add);

function handle_add(event){
  if (event.keyCode === 107 || event.type === 'click'){
  deleteStatus = true;
  ope = '+';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
  }
  else return;
}

multiply.addEventListener('click', handle_Multiply);
document.addEventListener('keydown', handle_Multiply)

function handle_Multiply(event){
  if (event.keyCode === 106 || event.type === 'click'){
  deleteStatus = true;
  ope = '*';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
 }
 else return;
}

subtract.addEventListener('click', handle_Subtract);
document.addEventListener('keydown', handle_Subtract);


function handle_Subtract(event){
  if (event.keyCode === 109 || event.type === 'click'){
  deleteStatus = true;
  ope = '-';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
  }
  else return;
}

divide.addEventListener('click', handle_divide);
document.addEventListener('keydown', handle_divide);

function handle_divide(event){
  
  if (event.keyCode === 191 ||event.keyCode === 111 || event.type === 'click'){
  deleteStatus = true;
  ope = '÷';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
  }
  else return;
}

equal.addEventListener('click', handle_Equal);
document.addEventListener('keydown', handle_Equal);



function handle_Equal(event){
    
  if (event.keyCode === 187 ||event.keyCode === 13 || event.type === 'click'){
    deleteStatus = 'false';
    expression = num_one + num22 + '=';
    upperDisplay.textContent = '';
    display1.textContent = '';
    upperDisplay.textContent = expression;
    finalResult = operate(num11,num22,ope);
    if (finalResult === undefined) finalResult = '';
    display1.textContent = finalResult;
    num11 = finalResult;
    num22 = '';
  }  
  else return;
}

function operate(num11, num22, ope){
  let num1 = num11;
  let num2 = num22;
  let oper = ope;

  switch (oper){
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    case '÷':
      if(num22 == 0){
        alert("You can't divide by 0!")
        num11='';
        num22='';
        ope = '';
        finalResult = '';
        expression = '';
        upperDisplay.textContent = '';
        display1.textContent = '';
        secondNum = false;
      }
      else if (num22 != 0){
      return +num1 / +num2;
      }
}
}
