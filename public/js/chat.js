
let messages = ['Tive uma ideia incrível para um projeto! 😍', 'Tive uma ideia incrível para um projeto! 😍', 'Tive uma ideia incrível para um projeto! 😍',];

let messagesElement = document.getElementById('messages')

for(let message of messages) {
  messagesElement.innerHTML += `<div class="containerMessage left">
  <div class="messageAndHour">
    <div class="time">
      <p>Cecilia - 19:20</p>
    </div>
    <div class="message">
      <p>${message}</p>
    </div>

  </div>
</div>`
}

scrollToBottom(messagesElement)
async function addMessage() {
  const inputMessage = document.getElementById('inputMessage')

  if(inputMessage.value) messages.push(inputMessage.value)
  else alert("Insira uma mensagem") 

messagesElement.innerHTML +=  `<div class="containerMessage right">
  <div class="messageAndHour">
    <div class="time">
      <p>Cecilia - 19:20</p>
    </div>
    <div class="message">
      <p>${messages[messages.length - 1]}</p>
    </div>

  </div>
</div>`

inputMessage.value = ''

scrollToBottom(messagesElement)
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    addMessage()
})

function scrollToBottom(element) {
  element.lastElementChild.scrollIntoView({
    behavior: 'smooth'
  })
}