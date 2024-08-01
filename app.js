// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(num){ // Recibe un monto en euros y devuelve el monto equivalente en dólares estadounidenses
    return Number((num * (1.07)).toFixed(2));
}
function fromDollarToYen(num){ // Recibe un monto en dólares y devuelve el monto equivalente en yenes japoneses
    return Number(((num / (1.07)) * (156.5)).toFixed(2));
}
function fromYenToPound(num){ // Recibe un monto en yen y devuelve el monto equivalente en libras esterlinas
    return Number(((num / (156.5)) * (0.87)).toFixed(2));
}

console.log(fromEuroToDollar(5));
console.log(fromDollarToYen(5));
console.log(fromYenToPound(5));

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};