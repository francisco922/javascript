let num  =[5,8,2,9,3,1]
num.sort()
num.push(1)
console.log(num)
console.log(`O veto tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(10)
if (pos == -1){
    console.log('O valor na posição não foi encontrado')
} else {
    console.log(` O valor 8 esta na posição ${pos}`)
}


