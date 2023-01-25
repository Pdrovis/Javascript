// Variáveis para armazenar o tempo
var seconds = 0;
var minutes = 0;
var hours = 0;

// Variável para armazenar o intervalo de tempo
var interval;

// Função para iniciar o cronômetro
function startTimer() {
    interval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        document.getElementById("timer").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);
}

// Função para parar o cronômetro
function stopTimer() {
    clearInterval(interval);
}

// Função para reiniciar o cronômetro
function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
}
