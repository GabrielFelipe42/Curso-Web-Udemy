function dinheiro(a=0) {
    const valor = a.toFixed(2).replace('.',',')
    console.log('R$'+ valor)
}

dinheiro(0.3000004)
dinheiro(0.23000001)