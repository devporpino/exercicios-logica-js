const palavra = prompt("Informe a palavra:")
let palavrainvertida = ""

for(let i = palavra.length - 1; i >= 0; i--){
  palavrainvertida += palavra[i]
}

if(palavra === palavrainvertida){
  alert(palavra + " é um palídromo")
} else {
  alert(palavra + " não é um palíndromo!\n\n" +
    palavra + "!==" + palavrainvertida)
}
                        
