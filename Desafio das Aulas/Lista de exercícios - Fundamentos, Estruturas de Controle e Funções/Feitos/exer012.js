function fatorial(num) {
    let c = 0
    let f = 0
    let res = 1
    while (c < (num-1)) {
       f = num - c
       res = res * f
       c++  
    }
    console.log(res)
}

fatorial(3)
fatorial(4)
fatorial(5)
fatorial(6)