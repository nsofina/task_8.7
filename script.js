let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);/*число, которое будет предлагать программа, его округление до меньшего*/
let orderNumber = 1; /*номер вопроса*/
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField'); /*номер вопроса хз зачем*/
const answerField = document.getElementById('answerField');/*текст вопроса что ли хз вы загадали число*/

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom1 = Math.round( Math.random()*2);
            switch (phraseRandom1){
                case 0:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Наверное, это число ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Это слишком просто! Ваше число - ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom2 = Math.round( Math.random()*2);
            switch (phraseRandom2){
                case 0:
                    answerField.innerText = `Сейчас угадаю! Это - ${answerNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Вероятно, это - ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Ваше число - ${answerNumber }?`;
                    break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let phraseRandom3 = Math.round( Math.random()*3);
        switch (phraseRandom3){
            case 0:
                answerField.innerText = `Я всегда угадываю!` ; 
                break;
            case 1:
                answerField.innerText = `Опять угадал!`;
                break;
            case 2:
                answerField.innerText = `Угадал, как всегда!`;
                break;
            case 3:
                answerField.innerText = `Я угадал!`;
                break;
        }
        document.body.style.backgroundImage='url(4A5.gif)';
        gameRun = false;
    }
})

