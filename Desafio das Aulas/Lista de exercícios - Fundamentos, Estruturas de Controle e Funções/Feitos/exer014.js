function Frutas(string) {
    switch (string) {
        case 'maçã':
            console.log('Não vendemos maçã aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('[ERRO]...Tente comprar outra fruta.')
    }
}

Frutas('maçã')
Frutas('kiwi')
Frutas('melancia')
Frutas('banana')