const inputEmail = document.getElementById("email_input");
const inputSenha = document.getElementById("senha_input");
function todosErrados() {
  inputEmail.classList.toggle("animacaoErro");
  inputSenha.classList.toggle("animacaoErro");
  setTimeout(() => {
    alert("Campos vazios! Preencha!");
    inputEmail.classList.toggle("animacaoErro");
    inputSenha.classList.toggle("animacaoErro");
  }, 750);
}

function senhaErrada() {
  inputSenha.classList.toggle("animacaoErro");
  setTimeout(() => {
    alert("O campo senha não está preenchido");
    inputSenha.classList.toggle("animacaoErro");
  }, 750);
}

function emailErrado() {
  inputEmail.classList.toggle("animacaoErro");
  setTimeout(() => {
    alert("O email inválido preencha novamente");
    inputEmail.classList.toggle("animacaoErro");
  }, 750);
}


function autenticar() {
  let emailVar = email_input.value;
  let senhaVar = senha_input.value;
  let regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  console.log(regex.test(emailVar));
  if (emailVar == "" && senhaVar == "") {
    todosErrados();
    return false;
  } else if (senhaVar == "") {
    senhaErrada();
    return false;
  } else if (emailVar == "" || !regex.test(emailVar)) {
    emailErrado();
    return false;
  } else {
    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        if (resposta.ok) {
          resposta.json().then((json) => {
            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_USUARIO = json.id;
            sessionStorage.CARGO_USUARIO = json.cargo;
            sessionStorage.MAQUINAS_USUARIO = JSON.stringify(json.maquinas);
            setTimeout(function () {
              window.location = "../cadastroMaquina/cadastroMaquina.html";
            }, 5000); // apenas para exibir o loading
          });
        } else {
          alert("Houve um erro ao tentar realizar o login!");

          resposta.text().then((texto) => {});
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });
  }
}
