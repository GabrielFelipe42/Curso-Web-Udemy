function comparação(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2)) {
        return 'não é um numero'
    } else {
        if (valor1 === valor2) {
            return `${valor1} é igual a ${valor2}`
        } else if (valor1 >= valor2) {
            return `${valor1} é maior que ${valor2}`
        } else {
            return `${valor1} é menor que ${valor2}`
        }
    }




}

console.log(comparação(2, 0))
console.log(comparação(2, 2))
console.log(comparação(2, 3))
console.log(comparação('a', 0))