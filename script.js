const arrayNumber1_19 = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 
                        'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 
                        'восемнадцать', 'девятнадцать'];

const arrayNumber20_90 = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят',  
                        'восемьдесят', 'девяносто'];

const arrayNumber100_900 = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот',  
                        'семьсот', 'восемьсот', 'девятьсот'];

let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));

if(Number.isNaN(minValue)) {
    minValue = 0;
}

minValue = (minValue < -999) ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));

if(Number.isNaN(maxValue)) {
    maxValue = 100;
}

maxValue = (maxValue > 999) ? 999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);/*число, которое будет предлагать программа, его округление до меньшего*/
let orderNumber = 1; /*номер вопроса*/
let textOfNumber;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField'); /*номер вопроса хз зачем*/
const answerField = document.getElementById('answerField');/*текст вопроса что ли хз вы загадали число*/

function textNumber() {
    let textCount = Math.abs(answerNumber);
    if (textCount < 20) {
        textOfNumber = arrayNumber1_19[textCount];
        }
        else if (textCount < 100) {
            let ostatok1 = textCount%10;
            textCount = parseInt(textCount/10);
            textOfNumber = arrayNumber20_90[textCount] + " " + arrayNumber1_19[ostatok1];
            }
            else if (textCount < 1000) {
                ostatok1 = textCount%100;
                if(ostatok1 < 20) {
                    textCount = parseInt(textCount/100);
                    textOfNumber = arrayNumber100_900[textCount] + " " + arrayNumber1_19[ostatok1];
                }
                else {
                    let ostatok2 = ostatok1%10;
                    ostatok1 = parseInt(ostatok1/10);
                    textCount = parseInt(textCount/100);
                    textOfNumber = arrayNumber100_900[textCount] + " " + arrayNumber20_90[ostatok1] + " " + arrayNumber1_19[ostatok2];
                }    
        }

    if (answerNumber < 0) {
        textOfNumber = 'минус ' + textOfNumber;
    }
    return textOfNumber;
}

textNumber();

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${textOfNumber } ${answerNumber }?`;


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
            textNumber();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom1 = Math.round( Math.random()*2);
            switch (phraseRandom1){
                case 0:
                    answerField.innerText = `Вы загадали число ${textOfNumber } ${answerNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Наверное, это число ${textOfNumber } ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Это слишком просто! Ваше число ${textOfNumber } ${answerNumber }?`;
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
            textNumber();
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let phraseRandom2 = Math.round( Math.random()*2);
            switch (phraseRandom2){
                case 0:
                    answerField.innerText = `Сейчас угадаю! Это ${textOfNumber } ${answerNumber }?`; 
                    break;
                case 1:
                    answerField.innerText = `Вероятно, это ${textOfNumber } ${answerNumber }?`;
                    break;
                case 2:
                    answerField.innerText = `Ваше число ${textOfNumber } ${answerNumber }?`;
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

