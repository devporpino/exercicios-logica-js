const numero = parseFloat(prompt("Olá sou o robô da tabuada\n " + "informe o número que deseja saber a tabuada: "))
let resultado = ""

for(let fator = 1;fator <= 20;fator++){
  resultado += "->" + numero + "*" + fator + "=" + (numero*fator) + "\n"
}
alert("o resultado da tabuada de " + numero + ":\n\n" + resultado)
