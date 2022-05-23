import conversation_json from "./data";
const chatArray = JSON.parse(conversation_json)

const run = () => {

    chatArray.forEach((element, index) => {
        const container = document.querySelector(".conversation")
        const newElement = document.createElement("div")
        
        setTimeout (()=>{
            newElement.className = `message message--${element.side}`
            newElement.innerHTML = `<div class="message__text">${element.text}</div>`
            container.appendChild(newElement)
        }, index * 500)
        
         
    });
    }

export {
    run
} 