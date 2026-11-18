const form = document.getElementById("imc-form");
const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");
const limparBtn = document.getElementById("limpar");
const resultadoBox = document.getElementById("resultado");
const imcNumero = document.getElementById("imc-numero");
const imcClassificacao = document.getElementById("imc-classificacao");

function classificarIMC(imc) {
  if (imc < 18.5) return { texto: "Abaixo do peso", cor: "#d97706" };
  if (imc < 25) return { texto: "Peso normal", cor: "#16a34a" };
  if (imc < 30) return { texto: "Sobrepeso", cor: "#ca8a04" };
  if (imc < 35) return { texto: "Obesidade grau I", cor: "#ea580c" };
  if (imc < 40) return { texto: "Obesidade grau II", cor: "#dc2626" };
  return { texto: "Obesidade grau III", cor: "#991b1b" };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    return;
  }

  const imc = peso / (altura * altura);
  const { texto, cor } = classificarIMC(imc);

  imcNumero.textContent = imc.toFixed(1).replace(".", ",");
  imcClassificacao.textContent = texto;
  resultadoBox.style.borderLeftColor = cor;
  imcClassificacao.style.color = cor;
  resultadoBox.classList.remove("hidden");
});

limparBtn.addEventListener("click", () => {
  form.reset();
  resultadoBox.classList.add("hidden");
  imcNumero.textContent = "--";
  imcClassificacao.textContent = "";
  pesoInput.focus();
});