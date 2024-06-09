
let messages = [];

let messagesElement = document.getElementById('messages')

for (let message of messages) {
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

async function addMessage() {
  const inputMessage = document.getElementById('inputMessage')
  const currentDate = new Date()

  if (inputMessage.value) messages.push(inputMessage.value)
  else alert("Insira uma mensagem")

  messagesElement.innerHTML += `<div class="containerMessage right">
  <div class="messageAndHour">
    <div class="time">
      <p>${sessionStorage.NOME_USUARIO} - ${currentDate.getHours()}:${currentDate.getMinutes()}</p>
    </div>
    <div class="message">
      <p>${messages[messages.length - 1]}</p>
    </div>

  </div>
</div>`

  inputMessage.value = ''
  scrollToBottom(messagesElement)

  await sendMessage(messages[messages.length - 1])

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

async function sendMessage(message) {
  try {
    const json = await fetch("/gemini/text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: message
      })
    })
    const response = await json.json()
    addAnswer(response.text)
  } catch(e) {
    console.log(e)
  }
}

function addAnswer(answer) {
  const currentDate = new Date()
  messagesElement.innerHTML += `<div class="containerMessage">
  <div class="messageAndHour">
    <div class="time">
      <p>Suporte(IA) - ${currentDate.getHours()}:${currentDate.getMinutes()}</p>
    </div>
    <div class="message">
      <p>${answer}</p>
    </div>

  </div>
</div>`
}