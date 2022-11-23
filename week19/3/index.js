let op;
class Сalculator {
    static sum(a, b) {
        return +a + +b;
    }

    static minus(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static div(a, b) {
        return a / b;
    }
}

function func() {
    let result;
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    switch (op) {
        case '+':
            result = Сalculator.sum(num1, num2);
            break;
        case '-':
            result = Сalculator.minus(num1, num2);
            break;
        case '*':
            result = Сalculator.multiply(num1, num2);
            break;
        case '/':
            result = Сalculator.div(num1, num2);
            if (num2 == 0) {
                alert ('На ноль делить нельзя');     
            }
            break;
    }

    document.getElementById("result").innerHTML = result;
}
