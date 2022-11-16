function showResult() {
    // функция для генерации чисел
    function generateNumbers(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    // объявляем массив и заполняем его сгененрированными числами
    let array = [];
    
    for(let i=0; i<10; i++) {
        array[i] = generateNumbers(-10, 10);
    }
    
    // минимальное и максимальное число
    let minNumber = Math.min.apply(null, array);
    let maxNumber = Math.max.apply(null, array);
    
    // сумма массива
    let numbersSum = 0;
    for(let i=0; i<array.length; i++){
        numbersSum += array[i];
    }
    
    // произведение массива
    let numbersMultiplication = 1;
    for(let i=0; i<array.length; i++){
        numbersMultiplication  *= array[i];
    }
    
    // среднее арифметическое
    let numbersAverage = numbersSum/array.length;
    
    // выводим все операции на страницу
    document.querySelector(".result").innerHTML = `Сгенерировали: ${array}; Минимальное: ${minNumber};
    Максимальное: ${maxNumber}; Среднее арифметическое: ${numbersAverage};Сумма чисел: ${numbersSum}; Произведение чисел: ${numbersMultiplication }` ;
}
// вызываем функцию на отработку по клику на кнопку
document.querySelector(".button").addEventListener("click", showResult);