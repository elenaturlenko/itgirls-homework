"use strict";

const form = document.querySelector('form');
const text = document.querySelector('.text');
const list = document.querySelector('.list');
const button = document.querySelector('.deleteButton');

// 11.let array = *localStorage.getItem('item') получаем значение из локального хранилища* *? спрашиваем, если в локальном хранилище есть значения с ключом item, которые мы можем взять, то записываем их в массив JSON.parse(localStorage.getItem('item'))* * а если в хранилище ничего нет, то пустой массив : []* ;
let array = localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')): [];
localStorage.setItem('item', JSON.stringify(array));

// 12.берем значение по ключу из локального хранилища,преобразовываем из вида ключ-значение и складываем в массив
const storage = JSON.parse(localStorage.getItem('item'));

// 4.создаем функцию для добавления li при добавлении новой заметки
let createLi = (note) => {
    // 5.создаем новый пункт списка li
    let li = document.createElement('li');
    // 6.добавляем текст заметки в новый li
    li.textContent = note;
    // 7.добавляем новый li в начало
    list.append(li);
}

form.addEventListener('submit', function(event){
    // 2.предотвращаем автоматическую отправку формы
    event.preventDefault();
    // 3.добавляем новые введенные заметки в массив
    array.push(text.value);
    // 10.сохраняем заметки в local storage и преобразуем значение предаваемого масива через JSON.stringify
    localStorage.setItem(('item'), JSON.stringify(array));
    // 8.добавляем текст новой заметки, введенной пользователем, при вызове фукции в функцию
    createLi(text.value);
    // 9.очищаем инпут ввода после заметки
    text.value = '';
});

// 13.проходимся по массиву и для каждого элемента создаем li
storage.forEach(element => {
    createLi(element);
});