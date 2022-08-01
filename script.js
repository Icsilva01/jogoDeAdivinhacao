//variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;
//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funções callback
function handleTryClick(event){
  event.preventDefault() //é para não enviar o formulário
  
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber){
  toggleScreen()
    document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = '' //irá resetar o número que está no input
  xAttempts++

  /*console.log(inputNumber.value) irá pegar o que digitamos
  no input*/
}
function handleResetClick(){
toggleScreen()
  xAttempts = 1
}

function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

