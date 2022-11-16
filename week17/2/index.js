function sendMessage() {
    let conversation = document.querySelector(".container__messages");
    let finalMessage;
    let message = document.querySelector(".textarea").value;

    function checkSpam(str) {
        if (str.toLowerCase().includes('viagra'.toLowerCase()) || str.toLowerCase().includes('xxx'.toLowerCase())) {
        let = changedMessage = str.replace(/viagra|xxx/gi, "***");
        } else {
            changedMessage = str;
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