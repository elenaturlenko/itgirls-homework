let errors = [];
function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push('Поле ' + input.placeholder + ' не заполнено');
  }
  if (validity.patternMismatch) {
    errors.push('Неверный формат заполнения');
  }
  if (validity.rangeOverflow) {
    let max = getAttributeValue(input, 'max'); 
    errors.push('Максимальное значение не может быть больше чем ' + max);
  }
  if (validity.rangeUnderflow) {
    let min = getAttributeValue(input, 'min'); 
    errors.push('Минимальное значение не может быть больше чем ' + min);
  }
  }

function checkAll() {
  errors = [];
  let inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    checkValidity(input);

    document.getElementById('errorsInfo').innerHTML= errors.join('. <br>');
  }
}




// //функция для проверки формы
// function check() {
//   let name = document.getElementById('firstName');
//   let lstName = document.getElementById('lastName');
//   let log = document.getElementById('login');
//   let pwd = document.getElementById('password');
//   let numb = document.getElementById('number');

//   //очищаем предыдущие сообщения
//   document.getElementById('errorMessage').innerHTML = '';

//   //условия проверки полей
//   if (name.value == '') {
//       document.getElementById('errorMessage').innerHTML+= 'Ваш имя не заполнено<br>';      
//     }

//   if (lstName.value == '') {
//       document.getElementById('errorMessage').innerHTML+= 'Ваша фамилия не заполнена<br>';      
//     }
  
//   if (log.value == '') {
//       document.getElementById('errorMessage').innerHTML+= 'Придумайте логин<br>';      
//     }

//   if (pwd.value.length<=7) {
//       document.getElementById('errorMessage').innerHTML+= 'Пароль не менее 8 символов<br>';      
//     } 

//   if (pwd.value == '') {
//       document.getElementById('errorMessage').innerHTML+= 'Придумайте пароль<br>';      
//     }  

//   if (numb.value == '') {
//       document.getElementById('errorMessage').innerHTML+= 'Введите номер телефона<br>';      
//     }  
    
//   if (numb.value.length>=12) {
//       document.getElementById('errorMessage').innerHTML+= 'Проверьте правильность введенного номера<br>';      
//     }  
// }