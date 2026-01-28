let screen = document.getElementById("screen");
let current = "";
let firstNumber = null;
let operator = null;
function press(value){
    if(value === 'C'){
        current = "";
        firstNumber = null;
        operator = null;
        screen.innerText = "0";
        return;
    }
    if(value === '⌫'){
        if(current.length>1){
            current = current.slice(0,-1);
            screen.innerText = current;
        }else{
            current = "";
            screen.innerText = "0";
        }
        return;
    }
    if(value === '='){
        if(firstNumber === null || operator === null) 
       return;
       let secondNumber = current;
       let result;
       switch(operator){
        case '+':
            result = Number(firstNumber) + Number(secondNumber);
            break;
            case '-':
                result = Number(firstNumber) - Number(secondNumber);
                break;
                case '*':
                    result = Number(firstNumber) * Number(secondNumber);
                    break;
                    case '/':
                        result = Number(firstNumber) / Number(secondNumber);
                        break;
       }
       screen.innerText = result;
       current = result.toString();
       return;
       }
       if(value === '+' || value === '-' || value === '*' || value === '/'){
        firstNumber = current;
        operator = value;
        current = "";
        screen.innerText = operator;
        return;
       }
       if(value === '.' && current.includes('.')){
        return;
       }
       if(value === '0' && current === ""){
        return;
       }
       current = current + value;
       screen.innerText = current;

    }
document.addEventListener("keydown",function (event){
    const allowedKeys = "0123456789+-*/.=cC";
    if(event.key === "Enter"){
        press("=");
        return;
    }
    if(event.key === "Backspace"){
        press("⌫");
        return;
    }
    if(event.key === "c" || event.key === "C"){
        press("C");
        return;
    }
     if(allowedKeys.includes(event.key)){
        press(event.key);
    
     }

});