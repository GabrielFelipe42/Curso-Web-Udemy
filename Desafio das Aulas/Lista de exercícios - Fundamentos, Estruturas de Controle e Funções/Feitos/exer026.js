const par = []

function pares(num) {
    for (let i=1; i<=100; i++){
        if (i % 2 === 0){
            par.push(i)
        }
    }
    console.log(par)
}

pares()