const carro1 = prompt('informe o carro 1: ')
const velocidade1 = parseFloat(prompt(' qual a velocidade do primeiro carro: '))

const carro2 = prompt('informe outro carro: ') 
const velocidade2 = parseFloat(prompt(' qual a velocidade do segundo carro: '))

if(velocidade1 > velocidade2){
    alert( carro1 + 'é mais rápido que ' + carro2)
}else if(velocidade1 < velocidade2){
    alert(carro2 + ' é mais rápido que ' + carro1)
}else{
    alert(carro1 + ' e ' + carro2 + ' tem a mesma velocidade' )
}