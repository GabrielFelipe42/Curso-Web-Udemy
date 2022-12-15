function anobi(num){
    if ((num % 4 === 0 && num % 100 != 0) || num % 400 === 0) {
        return true + '...O ano foi bissexto'
    } else{
        return false + '...O ano não foi bissexto'
    } 
}

console.log(anobi(1992))
console.log(anobi(2000))
console.log(anobi(1900))