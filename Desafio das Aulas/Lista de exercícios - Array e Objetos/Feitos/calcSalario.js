function calcSalario(horas, salario) {
    const total = horas * salario
    return `Salario igual a R$${total.toFixed(2)}`
}

console.log(calcSalario(10, 5))
console.log(calcSalario(150, 40.5))
