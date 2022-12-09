function div(a=0, b=1) {
    dividendo=a
    divisor=b
    return {
        Divisão: dividendo/divisor,
        Resto: dividendo%divisor
    }
}

console.log(div(10,5))
console.log(div(10))
console.log(div(7,2))
console.log(div(17,3))