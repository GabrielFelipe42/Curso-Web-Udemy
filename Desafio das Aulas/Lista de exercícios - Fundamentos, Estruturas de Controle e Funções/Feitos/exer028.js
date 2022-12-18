let pares = []
let impares = []

function separador(lista){
    for (let i in lista){
        if (lista[i] % 2 ===0) {
            pares.push(lista[i])
        } else {
            impares.push(lista[i])
        }
    }
    console.log('Os pares são: ' + pares)
    console.log('Os impares são: ' + impares)
}

separador([1,2,3,4,5,6,7,8,9,10])

