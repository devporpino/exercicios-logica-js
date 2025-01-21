const recruta = prompt('Iinforme o primeiro nome do recruta: ')
const sobrenome = prompt ('Informe o sobrenome do recruta: ')
const campoDeEstudo = prompt('Qual é o campo de estudo do recruta? ')
const anoDeNascimento = prompt('Qual o ano de nascimento do recruta? ')

alert(
    'Recruta cadastrado com sucesso!' + '\n' +
   'Nome completo do recruta: ' + recruta + ' ' + sobrenome +'\n' +
   'Campo de estudo do recruta: ' + campoDeEstudo + '\n' +
   'Idade do recruta: ' +  (2024 - anoDeNascimento)
)