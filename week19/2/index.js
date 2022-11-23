class Cat {
  constructor(catName, ownerName, phone, food, breed, sex, message) {
    this.catName = catName;
    this.ownerName = ownerName;
    this.phone = phone;
    this.food = food;
    this.breed = breed;
    this.sex = sex;
    this.message = message;
  }

}

document.querySelector(".btn").addEventListener("click", showPet);

function showPet() {
    let catName = document.querySelector("#catName").value;
    let ownerName = document.querySelector("#ownerName").value;
    let phone = document.querySelector("#phone").value;
    let breed = document.querySelector("#breed").value;
    let message = document.querySelector("#message").value;


    function chooseFood() {
      let food = document.querySelectorAll("input[name='food']");
      let foods = [];
      for (let i = 0; i < food.length; i++) {
          if (food[i].checked) {
              foods.push(food[i].value);
          }
      }
      return foods;
  }

  console.log(chooseFood());

    function chooseSex() {
        let sex = document.querySelectorAll('input[name="sex"]');
        let i;
        for (i = 0; i < sex.length; i++) {
            if (sex[i].checked) {
                break;
            }
        }
        
        return sex[i].value;
    }

    console.log(chooseSex());

    let food = chooseFood();
    let sex = chooseSex();

    let pet = new Cat(catName, ownerName, phone, food, breed, sex, message);

    console.log(pet);
}