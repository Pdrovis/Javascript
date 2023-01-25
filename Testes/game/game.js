continua = true
score = 0

while (continua == true) {
    function generateRandomLetter() {
        var possibleLetters = "+-*";
        return possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    result = 0

    num1 = parseInt(generateRandomNumber(0,10))
    num2 = parseInt(generateRandomNumber(0,10))
    operador = generateRandomLetter()

    resultU = window.prompt(num1 + " " + operador + " " + num2)

    if (operador == "+") {
        result = num1 + num2
        }
    else if(operador == "-") {
        result = num1 - num2
    }
    else if (operador == "*") {
        result = num1 * num2
    }
    else if (operador == "/") {
        result = num1 / num2
    }
    else {
        window.prompt("ERRO!!!")
    }

    if (result == resultU){
        score = score + 1
        continua = true
    }
    else {
        continua = false
        fim()
    }
}

document.getElementById("score").innerHTML = "pontuação" + score
