let isOpenModal = false;
  function modal() {
    const modal = document.getElementById("modalContainer");
    isOpenModal = !isOpenModal;
    if (isOpenModal) modal.style.display = "none";
    else modal.style.display = "flex";
  }

  modal();

  function handleSave() {
   const formModal = document.getElementById('contentModal')
   formModal.innerHTML = '<p>Carregando</p><div class="progressBar"><div class="progress green"></div></div>'
   setTimeout(() => {
    formModal.innerHTML = '<label for="nomeMaquina">Nome da máquina</label><input id="nomeMaquina" type="text" placeholder="Dudu computarias" />'
    alert('Computador salvo')

   }, 3000)

  }