function calculadora(a=0, string , b=0) {
    let n1 = a
    let n2 = b
    let op= string
    switch (op) {
        case '+':
            const soma = n1 + n2
            console.log(`${n1} + ${n2} = ${soma}`)
            break
        case '-':
            const sub = n1 - n2
            console.log(`${n1} - ${n2} = ${sub}`)
            break
        case 'x':
            const mult = n1 * n2
            console.log(`${n1} x ${n2} = ${mult}`)
            break
        case '/':
            const div = n1 / n2
            console.log(`${n1} / ${n2} = ${div}`)
            break
        default:
            console.log('[ERRO]...Operação invalida')
            break
    }
}

calculadora(2,'+',1)
calculadora(2,'-',1)
calculadora(2,'x',1)
calculadora(10,'/',5)
