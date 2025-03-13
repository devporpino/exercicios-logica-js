// Função para criar um elemento de rótulo (label)
function createLabel(text, htmlFor) {
    const label = document.createElement('label') // Cria um elemento <label>
    label.htmlFor = htmlFor // Define o atributo 'for' do label, que vincula ao input correspondente
    label.innerText = text // Define o texto que aparecerá no label
    return label // Retorna o label criado
}

// Função para criar um campo de entrada (input)
function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input') // Cria um elemento <input>
    input.id = id // Define o ID do input
    input.value = value // Define o valor inicial do input
    input.name = name // Define o nome do input (usado para formulários)
    input.type = type // Define o tipo de input (padrão: 'text')
    input.placeholder = placeholder // Define um placeholder (opcional)
    return input // Retorna o input criado
}

// Seleciona os elementos principais do HTML
const addTechBtn = document.getElementById('addTechBtn') // Botão para adicionar tecnologia
const form = document.getElementById('devForm') // Formulário principal
const developers = [] // Array para armazenar os desenvolvedores cadastrados
let inputRows = 0 // Contador para rastrear quantas linhas de tecnologias foram adicionadas

// Evento para adicionar uma nova tecnologia ao formulário ao clicar no botão
addTechBtn.addEventListener('click', function () {
    const stackInputs = document.getElementById('stackInputs') // Seleciona o elemento onde as tecnologias serão adicionadas

    const newRow = document.createElement('li') // Cria um novo elemento <li> para armazenar os inputs
    const rowIndex = inputRows // Salva o índice atual antes de incrementar
    inputRows++ // Incrementa o contador de linhas
    newRow.id = 'inputRow-' + rowIndex // Define um ID único para a nova linha
    newRow.className = 'inputRow' // Adiciona uma classe para facilitar a seleção no futuro

    // Cria o label e input para o nome da tecnologia
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    // Criando os inputs de experiência com labels correspondentes
    const expLabel = createLabel('Experiência: ') // Rótulo para os níveis de experiência

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio') // Radio Button 1
    const expLabel1 = createLabel('0-2 anos', id1) // Label correspondente

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio') // Radio Button 2
    const expLabel2 = createLabel('3-4 anos', id2) // Label correspondente

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio') // Radio Button 3
    const expLabel3 = createLabel('5+ anos', id3) // Label correspondente

    // Criando botão para remover a linha de tecnologia
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button' // Define o tipo como botão (para não enviar o formulário)
    removeRowBtn.innerText = 'Remover' // Define o texto do botão
    removeRowBtn.addEventListener('click', function () {
        stackInputs.removeChild(newRow) // Remove a linha ao clicar no botão
    })

    // Adicionando os elementos criados dentro da nova linha
    newRow.append(
        techNameLabel, techNameInput, expLabel, 
        expRadio1, expLabel1, 
        expRadio2, expLabel2, 
        expRadio3, expLabel3, 
        removeRowBtn
    )

    stackInputs.appendChild(newRow) // Adiciona a linha ao formulário
})

// Evento para tratar o envio do formulário
form.addEventListener('submit', function (ev) {
    ev.preventDefault() // Previne o comportamento padrão de recarregar a página ao enviar o formulário

    const fullnameInput = document.getElementById('fullname') // Obtém o input do nome completo
    const inputRows = document.querySelectorAll('.inputRow') // Seleciona todas as linhas de tecnologia adicionadas

    let technologies = [] // Array para armazenar as tecnologias inseridas

    inputRows.forEach(function (row) { // Itera sobre cada linha de tecnologia
        // Obtém o nome da tecnologia
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        
        // Obtém o nível de experiência selecionado
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked')?.value || ''
        
        // Adiciona ao array de tecnologias
        technologies.push({ name: techName, exp: techExp })
    })

    // Cria um objeto representando o desenvolvedor
    const newDev = { fullname: fullnameInput.value, technologies: technologies }
    developers.push(newDev) // Adiciona o novo desenvolvedor ao array
    alert('Dev cadastrado com sucesso!') // Exibe um alerta de sucesso

    // Limpa os campos do formulário após o cadastro
    fullnameInput.value = '' // Limpa o campo de nome
    inputRows.forEach(function (row) {
        row.remove() // Remove todas as linhas de tecnologia adicionadas
    })

    console.log(developers) // Exibe no console a lista de desenvolvedores cadastrados
})
