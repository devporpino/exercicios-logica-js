// const celsiusToFahrenheit = celsius => Math.round(celsius * 9 / 5) + 32
// console.log(celsiusToFahrenheit(27));

const celsius = prompt("Informe uma temperatura em celsius para converter em fahrenheit: ")

const celsiusToFahrenheit =  celsius => Math.round(celsius * 9 / 5) + 32
//alert(`a temperatura de celsius é : ${celsiusToFahrenheit(celsius)}`);

console.log(`a temperatura de celsius é : ${celsiusToFahrenheit(celsius)}`);


