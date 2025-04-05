// Criando o objeto "car" com várias propriedades, incluindo um array de donos (que são objetos)
const car = {
    marca: "Toyota",
    modelo: "Yaris",
    ano: 2024,
    cor: "Branco perolado",
    donos: [ 
        {
            nome: "Diana",
            idade: 50,
            cidade: "Guarabira"
        },
        {
            nome: "Isaac",
            idade: 20,
            cidade: "Guarabira"
        }
    ]
}

// Desestruturação de objeto: pegando diretamente as propriedades marca, modelo e donos
const { marca, modelo, donos } = car

// Acessando os nomes dos donos diretamente a partir do array
const firstOwner = donos[0].nome
const secondOwner = donos[1].nome

// Criando uma arrow function que recebe um carro e retorna um novo objeto com id aleatório e suas propriedades
const createCarInfo = car => ({
    id: Math.floor(Math.random() * 9999), // Gerando um número aleatório entre 0 e 9999
    marca: car.marca,                    // Pegando a marca do carro
    modelo: car.modelo,                  // Pegando o modelo
    ano: car.ano,                        // Pegando o ano
    cor: car.cor,                        // Pegando a cor
    donos: car.donos                     // Pegando a lista de donos
})

// Exibindo uma frase com template string usando os nomes dos donos
console.log(`O carro ${marca} ${modelo} é de ${firstOwner} e ${secondOwner}`)

// Chamando a função createCarInfo para gerar um novo objeto com id
const carInfo = createCarInfo(car)

// Exibindo o objeto criado com id aleatório
console.log(carInfo)