// Camel case: exemploNome
var nome = 'André';
let idade = 23;
const possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

// Evitar repetições
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

// 2 em 1
var sobrenome = 'Montório',
    cidade = 'Ribeirao Preto';
console.log(sobrenome, cidade);

// Sem definir
var semDefinir; // undefined

// Inválidos
// var $nome;
// var function;
// var 1possuifaculdade;

/* Hoisting
  Variáveis são movidas para cima do código , porém o valor atribuido não é movido. */

console.log(hoisting);
var hoisting = 'teste'; // vai retornar undefined

var hoisting2 = 'teste2';
console.log(hoisting2);

// Mudar o valor atribuído
var time = 'vasco';
time = 'flamengo';
console.log(time);

let numero = 1;
numero = 2;
console.log(numero);

const imutavel = true;
// imutavel = false // vai dar erro

/*

  Exercícios

  Declarar uma variável com seu nome
  Declarar uma variável com sua idade
  Declarar uma variável com sua comida favorita e nao atribuir valor;
  Atribuir valor a sua comida favorita

  Declarar 05 variáveis diferentes sem valores

  Respostas abaixo:
*/

var meuNome = 'André';
var minhaIdade = 23;
var comidaFavorita;
comidaFavorita = 'Japonesa';

var teste,
    teste2,
    teste3,
    teste4,
    teste5;