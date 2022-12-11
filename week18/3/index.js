document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.querySelector('.container__inputName').value = name;}

    let image = (localStorage.getItem('image'));
        if (image != null) {
            document.querySelector('.container__inputImg').value= image;
        }
    })

function sendMessage() {
    let conversation = document.querySelector(".container__messages");
    let finalMessage;
    let message = document.querySelector(".textarea").value;
    let userName = document.querySelector('.container__inputName').value
    let userImg = document.querySelector('.container__inputImg').value

    function checkSpam(str) {
        if (str.toLowerCase().includes('viagra'.toLowerCase()) || str.toLowerCase().includes('xxx'.toLowerCase())) {
        let = changedMessage = str.replace(/viagra|xxx/gi, "***");
        } else {
            changedMessage = str;
        }

        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', userName);
        }

        if (localStorage.getItem('image') == null) {
            localStorage.setItem('image', userImg);
        }
    }

    checkSpam(message);
    finalMessage = changedMessage;

    if (finalMessage != "") {
        let newMessage = document.createElement("p");
        conversation.appendChild(newMessage);
        newMessage.style.borderBottom = "0.5px solid gray";
        newMessage.innerHTML = finalMessage;
        document.querySelector(".textarea").value = "";
    } 

}

document.querySelector(".container__button").addEventListener("click", sendMessage);