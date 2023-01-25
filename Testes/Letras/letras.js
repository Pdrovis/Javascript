for (i = 0; i < 10; i++){
    function generateRandomLetter() {
        var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
    }
    
    document.write(generateRandomLetter());
}

