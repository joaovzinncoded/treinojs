const tempF =  [0, 32, 45, 50, 75, 80, 99, 120] 
const calcCelsius = tempF.map(temperatura => (((temperatura - 32) * 5) / 9).toFixed(2))
console.log(calcCelsius)