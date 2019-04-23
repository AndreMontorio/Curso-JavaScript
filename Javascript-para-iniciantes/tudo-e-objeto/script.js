// TUDO É OBJETO

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'André';
nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
// Uma string herda propriedades e métodos do construtor String()


// Números
var altura = 1.8;
altura.toString(); // '1.8'
altura.toFixed(); // '2' ele tenta arredondar
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos


// Funções
function areaQuadrado(lado) {
  return lado * lado;
}
areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
areaQuadrado.length; // 1 - retorna o total de parâmetros


// Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
});
// Objetos revolucionaram a programação
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.


// EXERCÍCIO 

// nomeie 3 propriedades ou métodos de strings
var nome = 'André';
nome.toUpperCase();
nome.valueOf();
nome.fixed();

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn2 = document.querySelector('.btn');
// addEventListener
// appendChild
// id
// innerHtml
// classList.add('teste') adiciona classe teste

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}