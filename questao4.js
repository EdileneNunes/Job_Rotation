/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado
teve dentro do valor total mensal da distribuidora.*/

var totalFaturamentoSP = 67836.43;
var totalFaturamentoRJ = 36678.66;
var totalFaturamentoMG = 29229.88;
var totalFaturamentoES = 27165.48;
var outrasUF = 19849.53;

var faturamentoTotal = totalFaturamentoSP + totalFaturamentoRJ + totalFaturamentoMG + totalFaturamentoES + outrasUF;

console.log("Percentual da distribuidora de estado de São Paulo: "
.concat((totalFaturamentoSP*100/faturamentoTotal).toFixed(2)).concat("%"));

console.log("Percentual da distribuidora de estado de Rio de Janeiro: "
.concat((totalFaturamentoRJ*100/faturamentoTotal).toFixed(2)).concat("%"));

console.log("Percentual da distribuidora de estado de Minas Gerais: "
.concat((totalFaturamentoMG*100/faturamentoTotal).toFixed(2)).concat("%"));

console.log("Percentual da distribuidora de estado de Espirito Santo: "
.concat((totalFaturamentoES*100/faturamentoTotal).toFixed(2)).concat("%"));

console.log("Percentual da distribuidora de outros estados: "
.concat((outrasUF*100/faturamentoTotal).toFixed(2)).concat("%"));