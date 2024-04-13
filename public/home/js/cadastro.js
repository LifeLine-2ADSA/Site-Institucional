function cadastrar() {
  let nomeVar = nome_input.value;
  let emailVar = email_input.value;
  let senhaVar = senha_input.value;
  let confirmacaoSenhaVar = senha2_input.value;
  let cnpjVar = 100; //cnpj_input.value;
  let cpfVar = cpf_input.value;
  let telefoneVar = telefone_input.value;
  let cargoVar = cargo_input.value;
  let enderecoVar = logradouro_input.value;

  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == "" ||
    cnpjVar == "" ||
    cpfVar == "" ||
    telefoneVar == "" ||
    cargoVar == "" ||
    enderecoVar == ""
  ) {
    alert("Campos em vazio!");
  } else if (nomeVar.length <= 1) {
    alert("Nome inválido!");
  } else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1) {
    alert("Email sem @ ou .");
  } else if (senhaVar.length < 8) {
    alert("Senha no minimo 8 caracteres");
  } else if (confirmacaoSenhaVar != senhaVar) {
    alert("Senhas diferentes");
  } else {
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        cnpjServer: cnpjVar,
        cpfServer: cpfVar,
        telefoneServer: telefoneVar,
        cargoServer: cargoVar,
        enderecoServer: enderecoVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          alert(
            "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
          );

          setTimeout(() => {
            window.location = "login.html";
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

function listarEmpresas() {
  fetch("/empresas/listar", {
    method: "GET",
  })
    .then(function (resposta) {
      resposta.json().then((empresas) => {
        empresas.forEach((empresa) => {
          listaEmpresas.innerHTML += `<option value='${empresa.idEmpresa}'>${empresa.cnpj}</option>`;
        });
      });
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
}
