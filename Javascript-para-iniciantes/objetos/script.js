// OBJETOS

// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
var pessoa = {
  nome: 'André',
  idade: 23,
  profissao: 'Front End Developer',
  possuiFaculdade: true
}
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true
// Propriedades e métodos consistem em nome(chave) e valor


// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.
// this. é utilizado para referenciar o próprio objeto
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}
quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20


// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  }
}
console.log(quadrado2.lados); // 4
console.log(quadrado2.area(10)); // 100
console.log(quadrado2.perimetro(5)); // 20
console.log(quadrado2.cinco()); // 5


// Organizar o Código
// Objetos servem para organizar o código em pequenas partes reutilizáveis
Math.PI; // 3.141592653589793
Math.random(); // Número aleatório

var pi = Math.PI;
console.log(pi);
// 'Math' é um objeto nativo de JavaScript. Já perbeceu que 'console' é um objeto e 'log()' é um método?


// Criar um objeto
// Um objeto é criado utilizando chaves {}
var carro = {};
var pessoa = {};
console.log(typeof carro); // 'object'


// Dot Notation GET
// Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 5,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'


// Dot Notation SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma
var menu2 = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu2.backgroundColor = '#000';
console.log(menu2.backgroundColor); // '#000'


// Adicionar propriedades e métodos
// Basta adicionar um novo nome e definir o valor
var menu2 = {
  width: 800,
}
menu2.height = 50;
menu2.position = 'fixed';


// Palavra-chave this
// 'this' irá fazer uma refeência ao próprio objeto
var height = 120;
var menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}
menu3.metadeHeight(); // 25
// sem o this, seria 60
// this irá retornar o próprio objeto


// Protótipo e Herança
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
var menu4 = {
  width: 800,
}
menu4.hasOwnProperty('width'); // True
menu4.hasOwnProperty('height'); // False
// hasOwnProperty é um método de Object


// EXERCÍCIO

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
  nome: 'André',
  sobrenome: 'Montório Souto',
  cpf: '456.136.458-76',
  idade: 23,
  possuiFaculdade: true,
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}
console.log(dadosPessoais.nomeCompleto());


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro.preco);


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'Au';
    } else {
      return 0;
    }
  }
}
