// 07 Tipos de dados

// Todos são primitivos exceto os objetos
// primitivos são dados imutáveis

var nome = 'andre'; // String
var idade = 23; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {}; // Object

console.log(typeof nome); // retorna o tipo de dado
console.log(typeof comida); // retorna o tipo de dado object, é um 'bug' que é mantido desde antes no js e nao foi 'corrigido' para nao quebrar aplicações antigas

// String
// Voce pode somar uma string e assim concatenar as palavras
var nomeString = 'André';
var sobrenomeString = 'Montório';
var nomeCompleto = nomeString + ' ' + sobrenomeString;

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido


var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols *2} gols`; // Utilizando Template String

console.log(frase1);
console.log(frase2);


// Declare uma variável contendo uma string
var contemString = 'Variável com string';
// Declare uma variável contendo um número dentro de uma string
var contemNumero = '1';
// Declare uma variável com a sua idade
var minhaIdade = 23;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var contemMeuNome = 'André',
    contemMeuSobrenome = 'Montório',
    contemMeuNomeCompleto = `${contemMeuNome} ${contemMeuSobrenome}`;
console.log(contemMeuNomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
console.log(frase);

// Verifique o tipo da variável que contém o seu nome
var verificarTipoNome = typeof contemMeuNome;
console.log(verificarTipoNome);
