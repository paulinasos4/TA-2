function convertToCelsius(temp) {
    const celsius = (temp - 32) * 5/9;
    return parseFloat(celsius.toFixed(1));
}
function convertToFahrenheit(temp){
    const fahrenheit = (temp* 5/9)-32;
    return parseFloat (fahrenheit.toFixed(1));
}
console.log ('37C en celsuis es', convertToCelsius(37));
console.log ('100C en fahrenheit es ', convertToFahrenheit(100));
