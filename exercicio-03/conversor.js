const medida = parseFloat(prompt("Informe um valor em metros que deseja converter: "))

const conversor = prompt("para qual unidade de medida você deseja converter? " + 
"\n1. milímetro (mm)" +
"\n2. centímetro (cm)" +
"\n3. decímetro (dm)" +
"\n4. decâmetro (dam)" +
"\n5. hectômetro (hm)" +
"\n6. quilometro (km)"
)

switch(conversor){
  case "1":
    alert("A conversão de " + medida + "m = "  + medida * 1000 + " mm")
    break
  case "2":
    alert("A conversão de " + medida + "m = " +  medida * 100 + " cm")
    break
  case "3":
    alert("A conversão de " + medida + "m = "  + medida * 10 + " dm")
    break
  case "4":
    alert("A conversão de " + medida + "m = " + medida / 10 + " dam")
    break
  case "5":
    alert("A conversão de " + medida + "m = " + medida / 100 + " hm")
    break
  case "6":
    alert("A conversão de " + medida + "m = " + medida / 1000 + " km")
    break
  default:
    alert("opção inválida...")
}