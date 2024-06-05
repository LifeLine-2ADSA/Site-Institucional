function postar() {
// Seleciona todos os checkboxes dentro da div .box-left
let checkboxes = document.querySelectorAll('.box-left .check');

// Cria um array para armazenar os valores selecionados
let selectedValues = [];

// Percorre todos os checkboxes e adiciona o valor dos selecionados ao array em letras maiúsculas
checkboxes.forEach(function (checkbox) {
  if (checkbox.checked) {
    selectedValues.push(checkbox.value.toUpperCase());
  }
});

// Junta os valores selecionados em uma única string, separados por espaço
let selectedValuesString = selectedValues.join(' ');


  let nomeVar = input_titulo.value;
  let tagsVar = selectedValuesString;
  let descricaoVar = input_descricao.value;
  let idUsuario = sessionStorage.ID_USUARIO;
  console.log(tagsVar);
  console.log(descricaoVar);
  if (
    nomeVar == "" ||
    descricaoVar == ""
  ) {
    alert("Campos em vazio!");
  } else if (nomeVar.length < 1) {
    alert("Titulo inválido!");

    } else if (descricaoVar.length < 1) {
      alert("Descrição invaálida!");
  } else {
    fetch("/post/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        descricaoServer: descricaoVar,
        tagsServer: tagsVar,
        idServer : idUsuario,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert(
            "Cadastro realizado com sucesso! Redirecionando para base de conhecimento..."
          );

          setTimeout(() => {
            window.location = "baseDeConhecimento.html";
          }, "2000");
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}
