require("dotenv").config();

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.PORT_APP;
var HOST_APP = process.env.HOST_APP;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var maquinaRouter = require("./src/routes/maquina");
var empresasRouter = require("./src/routes/empresas");
let leadRouter = require("./src/routes/lead") 
let postRouter = require("./src/routes/post") 
let geminiRouter = require("./src/routes/gemini") 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
//app.use("/postagem", postagemRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/maquina", maquinaRouter);
app.use("/empresas", empresasRouter);
app.use("/lead", leadRouter);
app.use("/post", postRouter);
app.use("/gemini", geminiRouter);

app.listen(PORTA_APP, function () {
  console.log(`
        ██╗     ██╗███████╗███████╗    ██╗     ██╗███╗   ██╗███████╗    
        ██║     ██║██╔════╝██╔════╝    ██║     ██║████╗  ██║██╔════╝    
        ██║     ██║█████╗  █████╗      ██║     ██║██╔██╗ ██║█████╗      
        ██║     ██║██╔══╝  ██╔══╝      ██║     ██║██║╚██╗██║██╔══╝      
        ███████╗██║██║     ███████╗    ███████╗██║██║ ╚████║███████╗    
        ╚══════╝╚═╝╚═╝     ╚══════╝    ╚══════╝╚═╝╚═╝  ╚═══╝╚══════╝                                                                                           
 `)
  console.log(`
    \n\n                                                                                                
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo '.env'\n\n`);
});
