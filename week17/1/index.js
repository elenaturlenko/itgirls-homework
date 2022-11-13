let button = document.querySelector('.button')

    button.addEventListener('click', () => {
        let name = document.querySelector('.name').value;
        name = name.replace(/[^a-zа-яё]/gi)
        name = name[0].toUpperCase() + name.slice(1).toLowerCase()

        let lastname = document.querySelector('.lastname').value;
        lastname = lastname.replace(/[^a-zа-яё]/gi)
        lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase()

        let patronymic = document.querySelector('.patronymic').value;
        patronymic = patronymic.replace(/[^a-zа-яё]/gi)
        patronymic = patronymic[0].toUpperCase() + patronymic.slice(1).toLowerCase()

        let newName = document.querySelector('.name');
        newName.value = name;

        let newLastname = document.querySelector('.lastname');
        newLastname.value = lastname;

        let newPatronymic = document.querySelector('.patronymic');
        newPatronymic.value = patronymic;

      });