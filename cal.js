let num11 = '';
let num22 = '';

let num_one;
let num_two;
let ope = '';

let secondNum = false;
let expression;
let finalResult = '';

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
    if(secondNum === false){
    num11 = num11.slice(0, num11.length - 1);
    display1.textContent = num11;
    }
    else if(secondNum === true){
      num22 = num22.slice(0, num22.length - 1);
      display1.textContent = num22;
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

decimal.addEventListener('click', ()=>{
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
});

num0.addEventListener('click', ()=>{
  if(secondNum === false){
    num11 = num11 + '0'
    display1.textContent = num11;
  }
} );


num1.addEventListener('click', ()=>{
  if(secondNum === false){
  num11 = num11 + '1'
  display1.textContent = num11;
  }
} );

num2.addEventListener('click', ()=>{
  if(secondNum === false){
    num11 = num11 + '2'
    display1.textContent = num11;
  }
} );


num3.addEventListener('click', ()=>{
  if(secondNum === false){
  num11 = num11 + '3'
  display1.textContent = num11;
  }
} );


num4.addEventListener('click', ()=>{
  if(secondNum === false){
    num11 = num11 + '4'
    display1.textContent = num11;
  }
} );


num5.addEventListener('click', ()=>{
  if(secondNum === false){
  num11 = num11 + '5'
  display1.textContent = num11;
  }
} );


num6.addEventListener('click', ()=>{
  if(secondNum === false){
    num11 = num11 + '6'
    display1.textContent = num11;
  }
} );


num7.addEventListener('click', ()=>{
  if(secondNum === false){
  num11 = num11 + '7'
  display1.textContent = num11;
  }
} );



num8.addEventListener('click', ()=>{
  if(secondNum === false){
      num11 = num11 + '8'
      display1.textContent = num11;
  }
} );


num9.addEventListener('click', ()=>{
  if(secondNum === false){
    num11 = num11 + '9'
    display1.textContent = num11;
  }
} );

num0.addEventListener('click', ()=>{
      if (secondNum === true){
        num22 = num22 + '0';
        display1.textContent = num22;
      }
});
num1.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '1';
    display1.textContent = num22;
  }
});
num2.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '2';
    display1.textContent = num22;
  }
});
num3.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '3';
    display1.textContent = num22;
  }
});
num4.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '4';
    display1.textContent = num22;
  }
});
num5.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '5';
    display1.textContent = num22;
  }
});
num6.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '6';
    display1.textContent = num22;
  }
});
num7.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '7';
    display1.textContent = num22;
  }
});
num8.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '8';
    display1.textContent = num22;
  }
});
num9.addEventListener('click', ()=>{
  if (secondNum === true){
    num22 = num22 + '9';
    display1.textContent = num22;
  }
});


add.addEventListener('click', ()=>{
  ope = '+';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
});

multiply.addEventListener('click', ()=>{
  ope = '*';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
});

subtract.addEventListener('click', ()=>{
  ope = '-';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
});


divide.addEventListener('click', ()=>{
  ope = '÷';
  num_one = num11 + ope;
  upperDisplay.textContent = num_one;
  display1.textContent = '';
  secondNum = true;
});

equal.addEventListener('click', ()=>{
   
    expression = num_one + num22 + '=';
    upperDisplay.textContent = '';
    display1.textContent = '';
    upperDisplay.textContent = expression;
    finalResult = operate(num11,num22,ope);
    display1.textContent = finalResult;
    num11 = finalResult;
    num22 = '';
    
});

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
        alert("You can't divide by 0, hit clear to reset!")
      }
      else{
      return +num1 / +num2;
      }
}
}
