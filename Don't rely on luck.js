function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function guessNumber() {
    const randomNumber = generateRandomNumber();
    let guess;
    do {
        guess = parseInt(prompt('Угадайте число от 1 до 100:'), 10);
        
        if (guess < randomNumber) {
            console.log('Ваше число меньше загаданного.');
        } else if (guess > randomNumber) {
            console.log('Ваше число больше загаданного.');
        } else if (guess === randomNumber) {
            console.log('Поздравляем! Вы угадали число.');
        } else {
            console.log('Пожалуйста, введите допустимое число.');
        }
    } while (guess !== randomNumber);
}
