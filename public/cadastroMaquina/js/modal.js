let isOpenModal = false;
function modal() {
  const modal = document.getElementById("modalContainer");
  isOpenModal = !isOpenModal;
  if (isOpenModal) modal.style.display = "none";
  else modal.style.display = "flex";
}

modal();

async function handleSave() {
  const input = document.getElementById('nomeMaquina')
    const response = await fetch("/maquina/cadastrar", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nomeMaquina: input.value
      })
    })
  
    console.log(response)
    const formModal = document.getElementById('contentModal')
    formModal.innerHTML = '<p>Carregando</p><div class="progressBar"><div class="progress green"></div></div>'
    setTimeout(() => {
      formModal.innerHTML = '<label for="nomeMaquina">Nome da máquina</label><input id="nomeMaquina" type="text" placeholder="Dudu computarias" />'
      if(response.status === 201) {
        alert('Computador salvo')
        
      } else {
        alert('Não foi possível salvar a máquina')
  
      }
  
    }, 3000)
  

}