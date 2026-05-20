var issoÉumaString = "Isso é uma string";
let issoÉumNúmero = 42;
const issoÉumBooleano = true;
let issoTambemEumaString = "42";

if (issoÉumNúmero === issoTambemEumaString) {
    console.log("As strings são iguais");
} else {
    console.log("As strings são diferentes");
}


console.log(issoÉumNúmero == issoTambemEumaString);

console.log(issoÉumNúmero + issoTambemEumaString);

console.log(issoÉumNúmero + issoÉumNúmero);

var issoEumaGlobal = "Eu sou uma variável global";

{
    let issoEumaLocal = "Eu sou uma variável local";
    console.log(issoEumaGlobal);
    console.log(issoEumaLocal);
}

console.log(issoEumaGlobal);
//console.log(issoEumaLocal); //isso causará um erro, pois issoEumaLocal não está definido fora do bloco

let floatvalue1 = 0.06;
let floatvalue2 = 0.01;
let sum = floatvalue1 + floatvalue2;

console.log(sum.toPrecision(2)); //Isso pode resultar em 0.
// 070000000001 devido a precisão dos números de ponto flutuante

// Atividade 1 - Números pares de 0 até 10

console.log('Números pares')

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log(i*2);
    console.log(i*2+1);
}


// Atividade 2 - Números ímpares de 0 até 10, mas no while

let j = 0
while (j < 5) {
    console.log(j*2+1);
    j++;
}



console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.cos(90));

// Gerando os numeros primos entre 1 e 100

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % 1 === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 100; 1++) {

}