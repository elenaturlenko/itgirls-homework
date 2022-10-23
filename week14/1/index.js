//функция для расчета
function func() {
  //пременная результата
  let result;

  //получаем имя
  let num1 = document.getElementById("num1").value;

  result = (`Привет, ${num1} !`);
   
  //отправка результата на страницу
  document.getElementById("result").innerHTML = result; 
}
