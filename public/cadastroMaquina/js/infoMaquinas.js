let listMaquinas = []
let inputNomeMaquina = document.getElementById('inputMaquina')

function fetchInfoMaquinas() {
    fetch(`/maquina/listarMaquinas/${sessionStorage.ID_USUARIO}`, {
        method: "GET",
    })
        .then(resposta => {
            resposta.json().then(maquinas => {
              listMaquinas = maquinas
                console.log(maquinas)
                maquinas.forEach((maquina) => {

                    maquinas_div.innerHTML +=
                     `
                    <div class="maquina" onClick="redirecionarDash(${maquina.idMaquina})">
                      <img src="../home/assets/images/computer.png" alt="" />
                      <div class="infoMaquina">
                        <h3 class="nomeMaquina">${maquina.nomeMaquina}</h3>
                        <p class="ipMaquina">${maquina.hostname}</p>
                      </div>
        
                      <div class="kpisMaquina">
                        <div class="kpiMaquina">
                          <h2>${(maquina.consumoCpu / maquina.maxCpu * 100).toFixed(0)}%</h2>
                          <p class="">CPU</p>
                        </div>
                        <div class="kpiMaquina">
                          <h2>${(maquina.consumoRam / maquina.maxRam * 100).toFixed(0)}%</h2>
                          <p class="">RAM</p>
                        </div>
                        <div class="kpiMaquina">
                          <h2>${(maquina.consumoDisco / maquina.maxDisco * 100).toFixed(0)}%</h2>
                          <p class="">DISCO</p>
                        </div>
                        <div class="status green"></div>
                      </div>
        
                    `
                });
                var qtdMaquinas = maquinas.length;

                qtd_maquinas.innerHTML = qtdMaquinas;
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function filterByName() {
  let listFiltred = listMaquinas.filter(maq => maq.nomeMaquina.toLowerCase().includes(inputNomeMaquina.value.toLowerCase()))
  if(listFiltred.length > 0) {
    maquinas_div.innerHTML = ''
  listFiltred.forEach(maquina => {
    maquinas_div.innerHTML += `
    <div class="maquina" onClick="redirecionarDash(${maquina.idMaquina})">
      <img src="../home/assets/images/computer.png" alt="" />
      <div class="infoMaquina">
        <h3 class="nomeMaquina">${maquina.nomeMaquina}</h3>
        <p class="ipMaquina">${maquina.hostname}</p>
      </div>

      <div class="kpisMaquina">
        <div class="kpiMaquina">
          <h2>${(maquina.consumoCpu / maquina.maxCpu * 100).toFixed(0)}%</h2>
          <p class="">CPU</p>
        </div>
        <div class="kpiMaquina">
          <h2>${(maquina.consumoRam / maquina.maxRam * 100).toFixed(0)}%</h2>
          <p class="">RAM</p>
        </div>
        <div class="kpiMaquina">
          <h2>${(maquina.consumoDisco / maquina.maxDisco * 100).toFixed(0)}%</h2>
          <p class="">DISCO</p>
        </div>
        <div class="status green"></div>
      </div>

    `
  })
  } else {
    maquinas_div.innerHTML = ''
  listMaquinas.forEach(maquina => {
    maquinas_div.innerHTML += `
    <div class="maquina" onClick="redirecionarDash(${maquina.idMaquina})">
      <img src="../home/assets/images/computer.png" alt="" />
      <div class="infoMaquina">
        <h3 class="nomeMaquina">${maquina.nomeMaquina}</h3>
        <p class="ipMaquina">${maquina.hostname}</p>
      </div>

      <div class="kpisMaquina">
        <div class="kpiMaquina">
          <h2>${(maquina.consumoCpu / maquina.maxCpu * 100).toFixed(0)}%</h2>
          <p class="">CPU</p>
        </div>
        <div class="kpiMaquina">
          <h2>${(maquina.consumoRam / maquina.maxRam * 100).toFixed(0)}%</h2>
          <p class="">RAM</p>
        </div>
        <div class="kpiMaquina">
          <h2>${(maquina.consumoDisco / maquina.maxDisco * 100).toFixed(0)}%</h2>
          <p class="">DISCO</p>
        </div>
        <div class="status green"></div>
      </div>

    `
  })
  }
}

inputNomeMaquina.addEventListener('onchange', event => {
  
})


function redirecionarDash(idMaquina) {
    sessionStorage.ID_MAQUINA_DASH = idMaquina;

    window.location = "../dashboard.html"
}