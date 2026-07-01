// setTimeout(() => {
//   console.log("Alerta");
// }, 3000);

// setInterval(() => {
//   console.log("Alerta");
// }, 3000);

console.log("inicio da execução")

function buscaDadosDoServidor() {
  return new Promise((resolve, rejected) => {
    console.log("Buscando dados no servidor");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("Dados recebidos com sucesso");
      } else {
        rejected("falha ao buscar dados do servidor");
      }
    }, 2000);
  });
}

buscaDadosDoServidor().then((mensagem) => {
    console.log(mensagem);
}).catch((erro) => {
    console.error(erro);
})

console.log("final da execução")