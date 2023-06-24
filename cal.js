let num11 = '';
let num22 = '';

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

const delete1 = document.querySelector('.delete');

const display1 = document.querySelector('.result');

const clear = document.querySelector('.clear');

clear.addEventListener('click', ()=>{
    num11 = num11.slice(0, num11.length - 1);
    display1.textContent = num11;
});

delete1.addEventListener('click', ()=> {
       num11 = '';
       display1.textContent = num11;
});

decimal.addEventListener('click', ()=>{
        if (num11.includes('.')){
        return
        }
        else{
            num11 = num11 + '.';
        }
        display1.textContent = num11;
});

num0.addEventListener('click', ()=>{
    num11 = num11 + '0'
    display1.textContent = num11;
} );


num1.addEventListener('click', ()=>{
  num11 = num11 + '1'
  display1.textContent = num11;
} );

num2.addEventListener('click', ()=>{
    num11 = num11 + '2'
    display1.textContent = num11;
} );


num3.addEventListener('click', ()=>{
  num11 = num11 + '3'
  display1.textContent = num11;
} );


num4.addEventListener('click', ()=>{
    num11 = num11 + '4'
    display1.textContent = num11;
} );


num5.addEventListener('click', ()=>{
  num11 = num11 + '5'
  display1.textContent = num11;
} );


num6.addEventListener('click', ()=>{
    num11 = num11 + '6'
    display1.textContent = num11;
} );


num7.addEventListener('click', ()=>{
  num11 = num11 + '7'
  display1.textContent = num11;
} );



num8.addEventListener('click', ()=>{
      num11 = num11 + '8'
      display1.textContent = num11;
} );


num9.addEventListener('click', ()=>{
    num11 = num11 + '9'
    display1.textContent = num11;
} );










//let num1 = 5;
//let num2 = 6;
//let operator = '+';

function operate(n1, n2, ope) {
    if (ope = '+') {
        return add(n1, n2);
    }
    else if (ope = '-') {
        return subtract(n1, n2);
    }
    else if (ope = '*') {
        return multiply(n1, n2);
    }
    else if (ope = '/') {
        return divide(n1, n2);
    }

}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

add(5, 6);