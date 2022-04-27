const prev = document.querySelector('.prev-value')
const input = document.getElementById('input__screen2')

const calculator = {
  prevState: 0,
  currentState: 0,
  result: '',
  operation: '',
  histoarial: [],
  operations: {
    '+': function (prev, current) { calculator.result = prev + current },
    '-': function (prev, current) { calculator.result = prev - current },
    '*': function (prev, current) { calculator.result = prev * current },
    '/': function (prev, current) { calculator.result = prev / current },
    '^': function (prev, current) { calculator.result = prev ** current }
  },
  input: (e) => { input.value += e.target.textContent },
  delete: () => { input.value = input.value.slice(0, -1) },
  reset: () => borrar(),
  addOperator: (e) => addOperator(e),
  caculate: () => makeOp()
}

function addOperator (e) {
  !calculator.operation || makeOp()
  calculator.prevState = parseFloat(input.value) || 0
  calculator.operation = e.target.textContent
  prev.textContent = calculator.prevState + ' ' + calculator.operation + ' '
  input.value = ''
}

function makeOp () {
  const key = calculator.operation
  calculator.operation = ''
  calculator.current = parseFloat(input.value)
  calculator.operations[key](calculator.prevState, calculator.current)
  prev.textContent += calculator.current
  input.value = calculator.result
}

function borrar () {
  prev.textContent = ''
  input.value = ''
  calculator.result = ''
  calculator.prevState = ''
  calculator.currentState = ''
  calculator.operation = ''
}

export default calculator
