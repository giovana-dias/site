function calcularImc() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    
    if (!isNaN(imc)) {
      resultado.innerHTML = "Seu IMC é " + imc.toFixed(2) + ". Confira a tabela abaixo e encontre sua classificação:";
    } else {
      resultado.innerHTML = "Você precisa preencher todos os campos corretamente.";
    }
  }
