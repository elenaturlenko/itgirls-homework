//переменная для математического действия
let op;

//функция для расчета
function func() {

    //пременная результата
    let result;

    //получаем превое и второе число
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    //проверка введенного занчения переменной и выбор подходящего действия
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

     //отправка результата на страницу
     document.getElementById("result").innerHTML = result;
  
}
    
