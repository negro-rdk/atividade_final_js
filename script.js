function verProduto() {
  let produtoInput = document.getElementById("produtoInput").value.toLowerCase().trim();
  let produtoSelect = document.getElementById("produtoSelect").value.toLowerCase();
  let produto = "";

  document.getElementById("mensagem").textContent = "";

  if (produtoInput !== "") {
    produto = produtoInput;
  } else if (produtoSelect !== "") {
    produto = produtoSelect;
  } else {
    document.getElementById("mensagem").textContent = "Selecione um produto válido";
    return;
  }

  switch (produto) {
    case "rubi":
      document.getElementById("nomeProduto").textContent = "Rubi";
      document.getElementById("descricaoProduto").textContent = "Uma das joias mais bem vistas e raras de nossas terras.";
      document.getElementById("precoProduto").textContent = "R$ 20.000,00";
      document.getElementById("imagem").src = "ruby.png";
      break;

    case "safira":
      document.getElementById("nomeProduto").textContent = "Safira";
      document.getElementById("descricaoProduto").textContent = "Uma das joias mais conhecidas e admiradas por todos.";
      document.getElementById("precoProduto").textContent = "R$ 15.000,00";
      document.getElementById("imagem").src = "safira.jpg";
      break;

    case "esmeralda":
      document.getElementById("nomeProduto").textContent = "Esmeralda";
      document.getElementById("descricaoProduto").textContent = "Muito confundida com a jade, mas seu valor continua sendo inestimável.";
      document.getElementById("precoProduto").textContent = "R$ 10.000,00";
      document.getElementById("imagem").src = "esmeralda.jpg";
      break;

    case "diamante":
      document.getElementById("nomeProduto").textContent = "Diamante";
      document.getElementById("descricaoProduto").textContent = "Uma das joias mais famosas, luxuosas e desejadas do mundo.";
      document.getElementById("precoProduto").textContent = "R$ 25.000,00";
      document.getElementById("imagem").src = "diamante.jpg";
      break;

    case "ouro":
      document.getElementById("nomeProduto").textContent = "Ouro";
      document.getElementById("descricaoProduto").textContent = "Um dos metais mais preciosos e muito usados para fabricar joias.";
      document.getElementById("precoProduto").textContent = "R$ 5.000,00";
      document.getElementById("imagem").src = "ouro.jpg";
      break;

    case "prata":
      document.getElementById("nomeProduto").textContent = "Prata";
      document.getElementById("descricaoProduto").textContent = "Um metal valioso, elegante e muito usado na produção de acessórios.";
      document.getElementById("precoProduto").textContent = "R$ 2.000,00";
      document.getElementById("imagem").src = "prata.jpg";
      break;

    case "rose quartzo":
      document.getElementById("nomeProduto").textContent = "Rose Quartzo";
      document.getElementById("descricaoProduto").textContent = "Uma joia muito procurada e valorizada por sua beleza delicada.";
      document.getElementById("precoProduto").textContent = "R$ 12.000,00";
      document.getElementById("imagem").src = "rose_quartzo.jpg";
      break;

    case "jade":
      document.getElementById("nomeProduto").textContent = "Jade";
      document.getElementById("descricaoProduto").textContent = "Uma pedra muito procurada e valorizada por sua cor marcante e elegância.";
      document.getElementById("precoProduto").textContent = "R$ 8.000,00";
      document.getElementById("imagem").src = "jade.jpg";
      break;

    default:
      document.getElementById("mensagem").textContent = "Selecione um produto válido";
      document.getElementById("nomeProduto").textContent = "Nome da joia";
      document.getElementById("descricaoProduto").textContent = "Descrição da joia";
      document.getElementById("precoProduto").textContent = "Preço da joia";
      document.getElementById("imagem").src = "logo.jpg";
  }
}

function limparCampos() {
  document.getElementById("produtoInput").value = "";
  document.getElementById("produtoSelect").value = "";
  document.getElementById("mensagem").textContent = "";
  document.getElementById("nomeProduto").textContent = "Nome da joia";
  document.getElementById("descricaoProduto").textContent = "Descrição da joia";
  document.getElementById("precoProduto").textContent = "Preço da joia";
  document.getElementById("imagem").src = "logo_joias_do_glamour_redondo.png";
}
document.getElementById("produtoInput").addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    verProduto();
  }
});
