import { OPERATIONS } from './config.js'

document.body.onload = addKeyboard

const input = document.getElementById('input__screen')

function addKeyboard () {
  const keyboard = document.querySelector('#v1 .keyboard')
  for (let index = 0; index < 10; index++) {
    keyboard.appendChild(createBtn(index, onScreen, 'c-button'))
  }
  OPERATIONS.map(index => {
    keyboard.appendChild(createBtn(index, onScreen, 'btn-operation'))
  })
  keyboard.appendChild(createBtn('=', evaluar, 'btn-equal'))
  keyboard.appendChild(createBtn('AC', () => input.value = '', 'btn-equal'))
  keyboard.appendChild(createBtn('<-', borrar, 'btn-equal'))
}

const createBtn = (content, callback, classList)=>{
  const element = document.createElement('button')
  element.textContent = content
  element.id = content
  element.onclick = callback
  element.classList = classList
  return element
}

function onScreen (e) {
  console.log(e.target.textContent)
  input.value += e.target.textContent
}

function evaluar() {
  const res = eval(input.value)
  input.value = res
  navigator.clipboard.writeText(res)
}
function borrar() {
  input.value = input.value.slice(0, -1)
}
