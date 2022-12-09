function JurosSimples(a=0, b=0, c=0) {
    capital = a
    taxa = b
    tempo = c
    juros = (capital * taxa * tempo) / 100
    return `O Montante é ${capital + juros}`
}

function JurosComposto(a=0, b=0, c=0) {
    capital = a
    taxa = b
    tempo = c
    return `O Montante é ${(capital*((1+(taxa/100))**tempo).toFixed(5))}`
}

console.log(JurosSimples(2000,3,4))
console.log(JurosComposto(2000,3,4))