function triangulo(a=0, b=0, c=0){
    if (a === b && b===c) {
        console.log('Este Triangulo é Equilátero')
    } else if (a===b || a===c || b ===c) {
        console.log('Este Triangulo é Isósceles')
    } else {
        console.log('Este Triangulo é Escaleno')
    }
}

triangulo(2,2,2) 
triangulo(2,2,4)
triangulo(2,4,4)
triangulo(2,4,2)
triangulo(1,2,3)