function bask(a=0, b=0, c=0) {
    console.log(`${a}x² + ${b}x + ${c} = 0`)
    const delta = (b**2) - (4*a*c)
    const lista = []

    if (delta < 0) {
        console.log(`[ERRO] Delta negativo: ${delta}`)
    } else {
        const result1 = ((-b) + (delta**(1/2)))/(2*a)
        lista.push(result1)
        const result2 = ((-b) - (delta**(1/2)))/(2*a)
        lista.push(result2)
        console.log(lista)
    }
}

bask(2,-6,0)
bask(1,2,3)
