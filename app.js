const inputPaciente = {
  nome: document.querySelector("#nome"),
  sobrenome: document.querySelector("#sobrenome"),
  altura: document.querySelector("#altura"),
  peso: document.querySelector("#peso"),
  imc: "",
};

imc = inputPaciente.peso / inputPaciente.altura ** 2;

// if(imc <= 18.5){
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta abaixo do peso ideal, o seu imc é: " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 ")
// }else if( imc >= 18.6 && imc < 24.9){
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta com o peso ideal, parabens!!! " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9  ")
// }else if( imc >= 24.9 && imc < 29.9){
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta com exesso de peso" + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de sobre peso é: 25 - 29.9 ")
// }else if( imc >= 29.9 && imc < 34.9){
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta com obecidade tipo 1 " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 1 é: 30 - 34.9 ")
// }else if( imc >= 34.9 && imc <= 39.9){
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta com obecidade tipo 2 " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obcidade tipo 2 é : 35 - 39.9 ")
// }else{
//     console.log(inputPaciente.nome + inputPaciente.sobrenome + " do genero: " + inputPaciente.genero + " voce esta realmente obeso! voce atingiu a obecidade tipo 3,o seu imc é: " + imc.toFixed(2) + " o imc ideal é: 18.6 - 24.9 e o imc de obecidade tipo 3 é 40 para mais ")
// }

// const titulo = document.querySelector("h1")
// console.log(titulo)

// titulo.innerText = "curso de desenvolvimento javaScript"

// const novoparagrafo = document.createElement("h2")

// novoparagrafo.innerText = "novo paragrafo criado no javaScript"

// const body = document.querySelector("body")

// body.append(novoparagrafo)

// novoparagrafo.style.color = "violet"
// titulo.style.color = "blue"

// const nome = document.querySelector('#nome')
// console.log(nome)

// const sobrenome = document.querySelector('#sobrenome')
// console.log(sobrenome)

// const altura = document.querySelector('#altura')
// console.log(altura)

// const peso = document.querySelector('#peso')
// console.log(peso)

// const genero = document.querySelector('#genero')
// console.log(genero)

// const endereco = document.querySelector('#endereco')
// console.log(endereco)

const dados = {
  nome,
  sobrenome,
  altura,
  peso,
  imc: "",
};

//seleção dos elementos DOM / HTML
const body = document.querySelector("body");
const botao = document.querySelector("button");
const form = document.querySelector("form");

console.log(botao, form);

function capturarDados() {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    //window.alert('evento recebido')

    //recebe os valores(.value) dos inputs de entrada do formulario e salva dentro do objeto dados (cosnt dados )
    dados.nome = inputPaciente.nome.value;
    dados.sobrenome = inputPaciente.sobrenome.value;
    dados.altura = Number(inputPaciente.altura.value);
    dados.peso = Number(inputPaciente.peso.value);

    // dados.imc = inputPaciente.imc.value
    // console.log(inputPaciente.imc.value)

    //dsipara a função que ira calcular o imc e enviar dentro do obejeto dados que contem todos os valores dos inputs digitados
    calcularIMC(dados);
  });
}

//função para calcular o IMC, ela recebe os valores dentro do parenteses
function calcularIMC(valores) {
  //pega o valor da divisão dopeso pelo quadrado da altura e salva em dados.imc
  dados.imc = valores.peso / valores.altura ** 2;

  //com base no valor de dados.imc faz a verificação da faixa de peso
  if (dados.imc <= 18.5) {
    inserirResultado("Abaixo do peso", dados.imc);

  } else if (dados.imc >= 18.6 && dados.imc < 24.9) {
    inserirResultado("Peso ideal",dados.imc);

  } else if (dados.imc >= 24.9 && dados.imc < 29.9) {
    inserirResultado("Sobrepeso",dados.imc);
  } else if (dados.imc >= 29.9 && dados.imc < 34.9) {
    inserirResultado("Acima do peso I",dados.imc);

  } else if (dados.imc >= 34.9 && dados.imc <= 39.9) {
    inserirResultado("Acima do peso II",dados.imc);

  } else {
    inserirResultado("Acima do peso III",dados.imc);
  }
}

function inserirResultado(faixa, resultado) {
  const paragrafo = document.querySelector("#paragrafo");

  paragrafo.innerText = "";
  paragrafo.innerText = `O paciente ${dados.nome} tem um IMC de ${resultado.toFixed(2)}  e está com ${faixa}`;

  // body.appendChild(paragrafo)
}

capturarDados();
