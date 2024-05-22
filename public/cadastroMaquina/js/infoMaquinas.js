function fetchInfoMaquinas() {
    fetch(`/maquina/listarMaquinas/${sessionStorage.ID_USUARIO}`, {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((maquinas) => {
                var qtdMaquinas = 0;
                maquinas.forEach((maquina) => {
                    qtdMaquinas++;

                    maquinas_div.innerHTML +=
                     `<div class="maquinas" onClick="redirecionarDash(${maquina.idMaquina})">
                    <div class="maquina">
                      <img src="../home/assets/images/computer.png" alt="" />
                      <div class="infoMaquina">
                        <h3 class="nomeMaquina">${maquina.nomeMaquina}</h3>
                        <p class="ipMaquina">${maquina.hostname}</p>
                      </div>
        
                      <div class="kpisMaquina">
                        <div class="kpiMaquina">
                          <h2>0%</h2>
                          <p class="">CPU</p>
                        </div>
                        <div class="kpiMaquina">
                          <h2>0%</h2>
                          <p class="">RAM</p>
                        </div>
                        <div class="kpiMaquina">
                          <h2>0%</h2>
                          <p class="">DISCO</p>
                        </div>
                      </div>
        
                      <div class="status green"></div>
                    </div>`
                });
                qtd_maquinas.innerHTML = qtdMaquinas;
            });
            console.log(resposta)
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function redirecionarDash(idMaquina) {
    sessionStorage.ID_MAQUINA_DASH = idMaquina;

    window.location = "../dashboard.html"
}