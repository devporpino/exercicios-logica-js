const number1 = parseFloat(prompt('Informe o primeiro número: ')) 
const number2 = parseFloat(prompt('Informe o segundo número: '))

const soma = number1 + number2
const subtracao = number1 - number2
const multiplicacao = number1 * number2
const divisao = number1 / number2


alert(
    'Calculadora' + '\n' +
    'Soma: ' + soma + '\n' +
    'Subtração: ' + subtracao + '\n' +
    'multiplicação: ' + multiplicacao + '\n' +
    'divisão: ' + divisao + '\n'
)