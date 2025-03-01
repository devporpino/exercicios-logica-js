const veiculo1 = prompt("Informe o nome do primeiro carro: ")
const veloCidaDe1 = parseFloat(prompt("Informe a velocidade do primeiro carro: "))

const veiculo2 = prompt("Informe o nome do segundo carro: ")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo carro: "))

if (veloCidaDe1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2 )
} else if (velocidade2 > veloCidaDe1){
    alert(veiculo2+ " é mais rápido do que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem a msm velocidade")
}
