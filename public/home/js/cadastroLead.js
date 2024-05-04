function buscarLead() {
  let email = input_email.value;
  console.log("EMAIL ==>" + email);
  fetch(`/lead/buscar/${email}`, {
    method: "GET",
  })
    .then(function (resposta) {
      if (resposta.status == 200) {
        alert("Este email já está cadastrado");
      } else {
        cadastrarLead();
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}

function cadastrarLead() {
  let nome = input_nome.value;
  let email = input_email.value;

  console.log("NOME CADASTRAR LEAD==>" + nome);
  console.log("EMAIL CADASTRAR LEAD ==>" + email);
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (nome == "" || email == "") {
    alert("Campos em vazio!");
  } else if (nome.length <= 1) {
    alert("Nome inválido!");
  } else if (!regex.test(email)) {
    alert("Email inválido");
  } else {
    console.log("ENTREI NO IF DO CADASTRAR LEAD");
    fetch("/lead/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeLead: nome,
        emailLead: email,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.status == 200) {
          alert("Cadastro do lead realizado com sucesso!");
        }
      })
      .catch(function (erro) {
        console.log("Erro: " + erro);
      });
  }
}
