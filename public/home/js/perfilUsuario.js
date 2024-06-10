function listar() {
  var idUsuario = parseInt(sessionStorage.ID_USUARIO);
  console.log(idUsuario)

  fetch(`/usuarios/listar/${idUsuario}`, {
      method: "GET",
  })
  .then(function (resposta) { 
    console.log(resposta) 
      if (resposta.ok) {
          resposta.json().then(function (json) {
            console.log(json[0])
              document.getElementById('nome_span').innerHTML += json[0].nome;
              document.getElementById('cpf_span').innerHTML += json[0].cpf;
              document.getElementById('cargo_span').innerHTML += json[0].cargo;
              document.getElementById('endereco_span').innerHTML += json[0].endereco;
              document.getElementById('email_span').innerHTML += json[0].email;
          });
      } else {
        resposta.text().then(textoErro => {
            console.log('Erro na resposta do servidor:', textoErro);
        });
      }
  })
  .catch(function (erro) {
      console.log(`#ERRO: ${erro}`);
  });
}
