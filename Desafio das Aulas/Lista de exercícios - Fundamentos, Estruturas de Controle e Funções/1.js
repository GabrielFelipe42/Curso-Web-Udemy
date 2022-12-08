function operacoes (a=0,b=0) {
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}


operacoes(10,5)

function ope(c=0,d=0) {
    const soma = c + d
    const sub = c - d
    const mult = c*d
    const div = c/d
    return {
        soma,
        sub,
        mult,
        div
    }
}

console.log(ope(10,5))



