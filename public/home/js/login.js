function autenticar() {
  let emailVar = email_input.value;
  let senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
    alert("Campos vazios! Preencha!");
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
          console.log(resposta);

          resposta.json().then((json) => {
            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.ID_USUARIO = json.id;
            sessionStorage.MAQUINAS_USUARIO = JSON.stringify(json.maquinas);

            setTimeout(function () {
              window.location = "home/perfil.html";
            }, 1000); // apenas para exibir o loading
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
