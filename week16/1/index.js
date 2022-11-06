function sumInput() {
  let numbers = [];
  let sum = 0;

  for (let i = 0;; i++) {

  numbers[i] = +prompt("Введите число");

  if(numbers[i] ==""){
      numbers.pop();
  }
  if (!numbers[i]) break;

    sum += numbers[i];
  }

  numbers.sort( (a, b) => a - b );

  alert(numbers)
  alert(sum);
}

sumInput()