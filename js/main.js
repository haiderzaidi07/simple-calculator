document.querySelector('#zero').addEventListener('click', addZeroToDom)
document.querySelector('#one').addEventListener('click', addOneToDom)
document.querySelector('#two').addEventListener('click', addTwoToDom)
document.querySelector('#three').addEventListener('click', addThreeToDom)
document.querySelector('#four').addEventListener('click', addFourToDom)
document.querySelector('#five').addEventListener('click', addFiveToDom)
document.querySelector('#six').addEventListener('click', addSixToDom)
document.querySelector('#seven').addEventListener('click', addSevenToDom)
document.querySelector('#eight').addEventListener('click', addEightToDom)
document.querySelector('#nine').addEventListener('click', addNineToDom)
document.querySelector('#add').addEventListener('click', addAddToDom)
document.querySelector('#subtract').addEventListener('click', addSubToDom)
document.querySelector('#multiply').addEventListener('click', addMultToDom)
document.querySelector('#divide').addEventListener('click', addDivToDom)
document.querySelector('#equal').addEventListener('click', evaluate)
document.querySelector('#decimal').addEventListener('click', addDecimalToDom)
document.querySelector('#clear').addEventListener('click', clearScreen)


function evaluate(){
    let expression = document.querySelector('h1').innerText
    let result = 0;
    let firstNumStr = ""
    let secondNum = ""
    let firstNum
    let operation;
    
    for(let i = 0; i < expression.length; i++){

        if(expression[i] === "+" || expression[i] === "-" || expression[i] === "*" || expression[i] === "/"){
            firstNum = Number(firstNumStr)
            operation = expression[i]
            
            for(let j = i+1; j < expression.length; j++){
                secondNum += expression[j]
            }
        }
        
        firstNumStr += expression[i]
    }
    
    secondNum = Number(secondNum)
    
    switch(operation){
        case "+":
            result = firstNum + secondNum    
            document.querySelector('h1').innerText = String(result)
            break
        case "-":
            result = firstNum - secondNum   
            document.querySelector('h1').innerText = String(result)
            break
        case "*":
                result = firstNum * secondNum    
            document.querySelector('h1').innerText = String(result)
            break
        case "/":
            result = firstNum / secondNum
            document.querySelector('h1').innerText = String(result)
            break
    }           
}

function addZeroToDom(){
    document.querySelector('h1').innerText += "0"
}

function addOneToDom(){
    document.querySelector('h1').innerText += "1"
}

function addTwoToDom(){
    document.querySelector('h1').innerText += "2"
}

function addThreeToDom(){
    document.querySelector('h1').innerText += "3"
}

function addFourToDom(){
    document.querySelector('h1').innerText += "4"
}

function addFiveToDom(){
    document.querySelector('h1').innerText += "5"
}

function addSixToDom(){
    document.querySelector('h1').innerText += "6"
}

function addSevenToDom(){
    document.querySelector('h1').innerText += "7"
}

function addEightToDom(){
    document.querySelector('h1').innerText += "8"
}

function addNineToDom(){
    document.querySelector('h1').innerText += "9"
}

function addAddToDom(){
    document.querySelector('h1').innerText += "+"
}

function addSubToDom(){
    document.querySelector('h1').innerText += "-"
}

function addMultToDom(){
    document.querySelector('h1').innerText += "*"
}

function addDivToDom(){
    document.querySelector('h1').innerText += "/"
}

function addDecimalToDom(){
    document.querySelector('h1').innerText += "."
}

function clearScreen(){
    document.querySelector('h1').innerText = ""
}