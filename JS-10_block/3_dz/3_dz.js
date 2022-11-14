const wsUri = "wss://javascript.info/article/websocket/demo/hello";

function pageLoaded() {
    console.log("Ds");

    const circle = document.querySelector(".circleError");
    const chatOutput = document.querySelector(".chat_output");
    const input = document.querySelector("input");
    const sendBtn = document.querySelector(".btn_send");

    let socket = new WebSocket(wsUri);

    socket.onopen = () => {

        circle.innerHTML = '<div class="circleConnect "></div>'
    }

    socket.onmessage = (event) => {
        writeToChat(event.data, true);
    }

    socket.onerror = () => {

        circle.innerHTML = '<div class="circleError "></div>'
    }

    socket.onclose = () => {
        circle.innerHTML = '<div class="circleError "></div>'
    }



    sendBtn.addEventListener("click", sendMessage);

    function sendMessage() {
        if (!input.value) return;
        socket.send(input.value);
        writeToChat(input.value, false);
        input.value === "";
    }

    function writeToChat(message, isRecieved) {
        let messageHTML = `<div class="${isRecieved ? "recieved" : "sent"}">${message}</div>`;
        chatOutput.innerHTML += messageHTML;
    }
}

document.addEventListener("DOMContentLoaded", pageLoaded);