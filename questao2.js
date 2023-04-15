/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

var valor1, valor2, valor3, limite
var valorPertenceFibonecci = false;
limite = 10
valor1 = -1;
valor2 = 1;
var numeroDigitado = prompt("Pesquisar sequência fibronacci até o dígito 34!")

for(var conte = 0; conte < limite; conte++) {
    valor3 = valor1 + valor2;
    valor1 = valor2;
    valor2 = valor3;
    console.log(valor3) 

    if(numeroDigitado == valor3){
        valorPertenceFibonecci = true;
    }
}

if(valorPertenceFibonecci){
    console.log("Valor informado pertence a sequência!")
}else{
    console.log("Valor não pertence a sequência!")
}




