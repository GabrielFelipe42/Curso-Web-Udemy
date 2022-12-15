function DiaSemana (num) {
    switch (num) {
        case 1:
            console.log('Domingo não é dia Útil')
            break
        case 2:
            console.log('Segunda não é dia Útil')  
            break
        case 3:
            console.log('Terça é dia Útil')  
            break     
        case 4:
            console.log('Quarta é dia Útil')  
            break 
        case 5:
            console.log('Quinta é dia Útil')  
            break
        case 6:
            console.log('Sexta é dia Útil')  
            break
        case 7:
            console.log('Sabado é dia Útil')  
            break   
        default:
            console.log('Esse dia não existe, digite um numero de 1 a 7')                
    }
}
DiaSemana(1)
DiaSemana(2)
DiaSemana(3)
DiaSemana(4)
DiaSemana(5)
DiaSemana(6)
DiaSemana(7)