//Input angka
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
 number.addEventListener("click", (event) => {
     inputNumber(event.target.value)
     updateScreen(currentNumber)
    })
})

//input kelayar
const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = " "
let calculationOperator = " "
let currentNumber = "0"

const inputNumber = (number) => {
    if(currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
       inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === " ") {
        prevNumber= currentNumber
    }
    calculationOperator = operator
    currentNumber = "0"
}

const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

//perhitungan
const calculate = () => {
    let result = " "
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = " "
}

//AC
const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber= " "
    calculationOperator = " "
    currentNumber = "0"
}

//desimal
const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(event.target.value)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}
