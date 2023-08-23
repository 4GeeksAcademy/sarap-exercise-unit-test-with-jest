// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dolar) => {
    return dolar * oneEuroIs ["JPY"] / oneEuroIs["USD"];
}

const fromEuroToDollar = (euro) => {
    // Convert from euros to dollars using the conversion rate
    return euro * oneEuroIs["USD"];
}


const fromYenToPound = (yen) => {
    return yen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}




const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }
