import calculator from './calculator.js'
import { OPERATIONS } from './config.js'

function addKeyboard () {
  const numbers = document.querySelector('.keyboard__number')
  const ops = document.querySelector('.keyboard__operations')

  for (let index = 9; index >= 0; index--) {
    numbers.appendChild(createBtn(index, calculator.input, 'c-button'))
  }
  numbers.appendChild(createBtn('.', calculator.input, 'c-button'))
  numbers.appendChild(createBtn('00', calculator.input, 'c-button'))

  ops.appendChild(createBtn('C', calculator.delete, 'btn-equal'))
  ops.appendChild(createBtn('AC', calculator.reset, 'btn-equal'))
  OPERATIONS.map(index => {
    ops.appendChild(createBtn(index, calculator.addOperator, 'btn-operation'))
  })
  ops.appendChild(createBtn('=', calculator.caculate, 'btn-equal'))
}

const createBtn = (content, callback, classList) => {
  const element = document.createElement('button')
  element.textContent = content
  element.id = content
  element.onclick = callback
  element.classList = classList
  return element
}

addKeyboard()

const mode = document.querySelector('.calculator__mode')
const body = document.querySelector('body')

mode.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('tema', 'light')
  } else {
    localStorage.setItem('tema', 'dark')
  }
  body.classList.toggle('dark-theme')
})
window.addEventListener('load', (e) => {
  if (localStorage.getItem('tema') === 'dark') {
    body.classList.toggle('dark-theme')
  }
})
