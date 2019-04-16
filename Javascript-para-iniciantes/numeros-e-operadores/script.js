// Número e operadores

// Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// Operadores
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Operadores Aritmeticos (strings)
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2;

//
var divisao = 100 / 5;
var modulo = 3872983892 % 3;
console.log(modulo);

// Verifica se é um NaN
var testeNaN = '100' / 2; 
console.log(isNaN(testeNaN));

// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão 

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1); // 110

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Operadores Aritméticos Unários
// Mesma coisa para o decremento --x
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN
console.log(frase);

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
// Se tiver letra vira NaN
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Exercícios
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 10 + 5 + 20 = 35

// Crie duas expressões que retornem NaN
var forcarNan = + 'a';
var forcarNan2 = 'a' / 2;
console.log(forcarNan, forcarNan2);


// Somar a string '200' com o número 50 e retornar 250
var duzentosECinquenta = +'200' + 50; 
console.log(duzentosECinquenta);

// Incremente o número 5 e retorne o seu valor incrementado
var numeroCinco = 5;
numeroCinco++;
console.log(numeroCinco);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso);
