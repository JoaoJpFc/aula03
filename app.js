const paciente = {
        peso :  62.50,
        altura : 1.65,
        nome : "Robert",
        sobrenome: "Lewandowsky",
        sexo: "masculino",
        endereço: "Avenida Europa",
        IMC : "",
}
paciente.IMC = paciente.peso / (paciente.altura **2);
console.log(paciente.IMC);

if(paciente.IMC < 18.5){
    console.log(`Paciente abaixo do peso. ${paciente.IMC.toFixed(2)}`)

} else if (paciente.IMC >=18.5 && paciente.IMC <24.9){
    console.log(`Paciente ${paciente.nome} do sexo ${paciente.sexo} que mora na ${paciente.endereço} tem peso normal. ${paciente.IMC.toFixed(2)}`)

} else if (paciente.IMC >=24.9 && paciente.IMC <29.9){
    console.log(`Paciente ${paciente.nome} do sexo ${paciente.sexo} que mora na ${paciente.endereço} está acima do peso. ${paciente.IMC.toFixed(2)}`)

} else if (paciente.IMC >=29.9 && paciente.IMC <34.9){
    console.log(`Paciente ${paciente.nome} do sexo ${paciente.sexo} que mora na ${paciente.endereço}tem obesidade tipo I. ${paciente.IMC.toFixed(2)} `)

} else if (paciente.IMC >=34.9 && paciente.IMC <39.9){
    console.log(`Paciente ${paciente.nome} do sexo ${paciente.sexo} que mora na ${paciente.endereço} tem obesidade tipo II. ${paciente.IMC.toFixed(2)}`)

}else{
    console.log(`Paciente ${paciente.nome} do sexo ${paciente.sexo} que mora na ${paciente.endereço} tem obesidade tipo III. ${paciente.IMC.toFixed(2)}`)
}


// const título = document.querySelector('h1')

// const body = document.querySelector('body')

// console.log(título)

// título.innerText = 'Curso de Desenvolvimento Javascript'
// título.style.color = "green"

// const novoParagrafo = document.createElement('h2')

// novoParagrafo.innerText = 'Novo paragrafo criado no Javascript'

// body.append(novoParagrafo)

// novoParagrafo.style.color = 'red'

const nome  = document.querySelector('#nome')
console.log(nome)

const sobrenome  = document.querySelector('#sobrenome')
console.log(sobrenome)

const altura  = document.querySelector('#altura')
console.log(altura)

const peso  = document.querySelector('#peso')
console.log(peso)

const endereço  = document.querySelector('#endereço')
console.log(endereço)

const sexo  = document.querySelector('#sexo')
console.log(sexo)

const botao = document.querySelector('button')
const form = document.querySelector('form')

console.log(botao, form)

function teste(){
    form.addEventListener('submit',(evento)=>{
        evento.preventDefault()
        window.alert('Evento Recebido')
    })
}
teste()