const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const salario = (func, funcAtual) => {
       return func.salario < funcAtual.salario ?  func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)


    console.log('Agora a funcionaria chinesa com o menor salario é?')
    const func = funcionarios.filter(china).filter(mulher).reduce(salario)
    console.log(func)
})

