// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let fraseAltura = prompt('Digite altura')
  let fraseLargura = prompt('Digite largura')
  const calculaArea =(fraseAltura*fraseLargura)
  console.log(calculaArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sualet fraseAno = prompt('Digite o ano atual')
  let fraseNascimento = prompt('Digite ano de nascimento')
  const calculaIdade =(fraseAno-fraseNascimento)
  console.log(calculaIdade) 

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura)
  const resposta =imc.toFixed(1)
  return resposta

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
const fraseOne =prompt("Qual seu nome?")
const fraseTwo =prompt("Qual a sua idade?")
const fraseThree =prompt("qual seu email?")
const string = (`Meu nome é ${fraseOne}, tenho ${fraseTwo} anos, e o meu email é ${fraseThree}.`)
console.log(string)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const pergunta = prompt('Diga primeira cor ')
  const perguntaDois = prompt('Diga a segunda cor')
  const perguntaTres = prompt('Diga aterceira cor')
  const colors = [pergunta,perguntaDois,perguntaTres]
  console.log(colors)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const preju =custo /valorIngresso
  return preju

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.at(-1)


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const copia = array
  const copiaOne = copia[0]
  const copiaTwo = copia [array.length-1]

  copia.pop()
  copia.shift()
  
  copia.push(copiaOne)
  copia.unshift(copiaTwo)
  return copia

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igual =string1.toLowerCase() === string2.toLowerCase()
  return igual

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual'))
  const anoNascimento = Number(prompt('Data de nascimento'))
  const emissaoRg = Number(prompt('Ano de emissão do  RG'))

  const idade = anoAtual - anoNascimento
  const tempoRg = anoAtual - emissaoRg

   const menores20 = idade <= 20 && tempoRg >= 5
    

   const entre20e50 = idade >20 && idade <=50 && tempoRg >= 10
     
  
   const maiores50 =idade > 50 && tempoRg >= 15

 
   console.log(menores20||entre20e50||maiores50)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 4 ==0 && ano % 100!=0 || ano % 400==0

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
   const anos = prompt("Você temmaisde18 anos?")
   const medio = prompt ("Você tem ensino Médio?")
   const horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
   

   console.log(anos === "sim" && medio === "sim" && horario === "sim")

}