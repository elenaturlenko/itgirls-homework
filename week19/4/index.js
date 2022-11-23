class Validator {
    isEmail(a) {
        let mail = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
        if (a.match(mail)) {
            return true;
        } else {
            return false;
        }
    }

    isDomain(a) {
        let dom = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i
        if (a.match(dom)) {
            return true;
        } else {
            return false;
        }
    }

    isDate(a) {
        let date = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/i
        if (a.match(date)) {
            return true;
        } else {
            return false;
        }
    }

    isPhone(a) {
        let tel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        if (a.match(tel)) {
            return true;
        } else {
            return false;
        }
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));

class ValidatorStatic {
    static isEmail(a) {
        let mail = /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
        if (a.match(mail)) {
            return true;
        } else {
            return false;
        }
    }

    static isDomain(a) {
        let dom = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i
        if (a.match(dom)) {
            return true;
        } else {
            return false;
        }
    }

    static isDate(a) {
        let date = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/i
        if (a.match(date)) {
            return true;
        } else {
            return false;
        }
    }

    static isPhone(a) {
        let tel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
        if (a.match(tel)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67'));