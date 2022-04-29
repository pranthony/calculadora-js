const input = document.getElementById('input__screen2')

input.addEventListener('load', (e)=>{
  input.value = 0
})

const calculator = {
  flag: false,
  prev: 0,
  current: 0,
  result: 0,
  operation: '',
  histoarial: [],
  operations: {
    '+': function (prev, current) { calculator.result = prev + current },
    '-': function (prev, current) { calculator.result = prev - current },
    '*': function (prev, current) { calculator.result = prev * current },
    '/': function (prev, current) { calculator.result = prev / current },
    '^': function (prev, current) { calculator.result = prev ** current }
  },
  input: (e) => {
    if (calculator.flag) {
      calculator.flag = false
      input.value = ''
    }
    input.value += e.target.textContent
  },
  delete: () => { input.value = input.value.slice(0, -1) },
  reset: () => borrar(),
  addOperator: (e) => addOperator(e),
  caculate: () => makeOp()
}

function addOperator (e) {
  calculator.flag = true
  calculator.operation = e.target.textContent
  calculator.current = parseFloat(input.value)
}

function makeOp () {
  calculator.flag = true
  calculator.prev = calculator.current
  calculator.current = parseFloat(input.value)
  calculator.operations[calculator.operation](calculator.prev, calculator.current)
  input.value = calculator.result
}

function borrar () {
  input.value = 0
  calculator.result = ''
  calculator.prevState = ''
  calculator.current = ''
  calculator.operation = ''
}

export default calculator
