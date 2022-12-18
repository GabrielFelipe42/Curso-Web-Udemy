console.log('Escolha seu Plano para executar o aumento => Plano A: 10%, Plano B: 15%, Plano C: 20%')

function aumento(plano, salario=0) {
    function dinheiro(num=0){
        return `R$${parseFloat(num).toFixed(2).replace('.',',')}`
    }
    
    switch(plano) {
        case 'A':
            salario = salario*1.1
            return console.log(`Seu novo salario é de ${dinheiro(salario)}`)
            break
        case 'B':
            salario = salario*1.15
            return console.log(`Seu novo salario é de ${dinheiro(salario)}`)
            break
        case 'C':
            salario = salario*1.2
            return console.log(`Seu novo salario é de ${dinheiro(salario)}`)
            break
        default:
            return console.log('[ERRO]...Plano não encontrado')
    }
}
aumento('A',1000)
aumento('B',1000)
aumento('C',1000)
aumento('D',1000)