document.addEventListener("DOMContentLoaded", function(event){
  let heroes = JSON.parse(json);
  showHeroes();
  getRate();
});

function showHeroes() {
  let heroes = JSON.parse(json);
  let heroesContent = ""; 
  for(let hero of heroes) {
      heroesContent += `<div class="card">
      <div><img src="${hero.photoSrc}" alt="${hero.name}"></div>
      <h2 class="card__title">${hero.name}</h2>
      <p><span class="card__subtitle">Вселенная: </span><span class="card__text">${hero.universe}</span></p>
      <p><span class="card__subtitle">Альтер Эго: </span><span class="card__text">${hero.alterEgo}</span></p>
      <p><span class="card__subtitle">Род деятельности: </span><span class="card__text">${hero.occupation}</span></p>
      <p><span class="card__subtitle">Друзья: </span><span class="card__text">${hero.friends}</span></p>
      <p><span class="card__subtitle">Суперсилы: </span><span class="card__text">${hero.superPower}</span></p>
      <p><span class="card__subtitle">Подробнее: </span><p class="card__text">${hero.details}</p></p>
  </div>
  <div class="card__title ">Ваша оценка: </div>
    <select name="rate" id="${hero.name}">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <button class="btn" onclick='saveRate()'>Отправить оценку</button>
        </div>`;
  }
  document.querySelector(".main__card").innerHTML = heroesContent;
}

function saveRate() {
  let heroes = JSON.parse(json);
  let select = document.querySelectorAll('select');
      for( i=0; i<heroes.length; i++){
        let selectHero= select[i].value;
        localStorage.setItem(heroes[i].name, selectHero);
      }
}

function getRate() {
  let heroes = JSON.parse(json);
  let select =document.querySelectorAll('select');
      for(i=0; i<heroes.length; i++){
  if (localStorage.getItem(heroes[i].name) != null){
      select[i].value= JSON.parse(localStorage.getItem(heroes[i].name));
  }}
}