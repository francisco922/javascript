// Fundamentos 
// var nome = "valor"
var minhaVariavel = "Olá mundo!"
console.log(minhaVariavel)
//variaveis e tipos de dados
var meuNumero = 10
console.log(meuNumero);
// console.log(meuNumero +5)
console.log("10" + 5);
console.log(typeof meuNumero);
var booleano = true; // false
console.log(typeof booleano);
var meuObjeto = {}
var meuArray = []
var meuNll = null
var meuUndefined = undefined; 

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof  meuNll);
console.log(typeof meuUndefined);

//let e const
// novas formas de declarar variaveis const nao muda .
let x = 10;
const y = 5;

console.log(typeof x);

console.log(x,y);
//Operadores aritimeticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x == y);

// Operadores de comparaçâo
console.log(x == y);
console.log(x != y) ;
console.log("5"== 5);
console.log("5"!==5);

// Operadores Lógicos
//AND
//OR ||
console.log(10 > 5  && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 == 5  || 20 > 5);

console.log(10 == 5 || 20 != 5);
console.log(10==5 && 40 > 10)

// Cnversão de tipos.
const meuNumero3 = "456"
const meuNumeroConvertido = Number(meuNumero3)
console.log(meuNumeroConvertido);
console.log (typeof meuNumeroConvertido);

//estrutura de condição if , else.

const idade = 20;

if (idade < 12){
    console.log("criança");
} else {
    console.log("Adulto");
}

const nome = jonas;
    if (nome = Moises){
console.log("Profeta")
    } else {
        console.log("Nao é  Profeta");
    }