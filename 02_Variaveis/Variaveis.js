// Variáveis em JavaScript
// As variáveis são usadas para armazenar dados que podem ser alterados durante a execução do programa.

// Declaração de variáveis com 'var'
var nome = "Arthur"; // 'var' tem escopo de função e pode ser redeclarada
var idade = 30;

// Declaração de variáveis com 'let'
let cidade = "São Paulo"; // 'let' tem escopo de bloco e não pode ser redeclarada no mesmo escopo
let estado = "SP";

// Declaração de constantes com 'const'
const pais = "Brasil"; // 'const' tem escopo de bloco e não pode ser alterada após a atribuição inicial

// Tipos de dados em JavaScript
// JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente pelo valor atribuído a ela.

// Tipo String
let saudacao = "Olá, mundo!"; // Cadeia de caracteres

// Tipo Number
let ano = 2023; // Número inteiro
let pi = 3.14; // Número de ponto flutuante

// Tipo Boolean
let estaChovendo = false; // Verdadeiro ou falso

// Tipo Null
let vazio = null; // Ausência intencional de qualquer valor

// Tipo Undefined
let indefinido; // Variável declarada mas não inicializada

// Tipo Object
let pessoa = {
    nome: "Arthur",
    idade: 30,
    cidade: "São Paulo"
}; // Conjunto de pares chave-valor

// Tipo Array
let numeros = [1, 2, 3, 4, 5]; // Lista ordenada de valores

// Tipo Function
function cumprimentar(nome) {
    return "Olá, " + nome + "!";
} // Bloco de código que pode ser executado e reutilizado

// Exemplo de uso das variáveis e tipos de dados
console.log(saudacao); // Saída: Olá, mundo!
console.log("Meu nome é " + nome + " e eu moro em " + cidade + ", " + estado + ", " + pais + ".");
console.log("Estamos no ano de " + ano + " e o valor de pi é aproximadamente " + pi + ".");
console.log("Está chovendo? " + estaChovendo);
console.log("Valor vazio: " + vazio);
console.log("Valor indefinido: " + indefinido);
console.log("Dados da pessoa: ", pessoa);
console.log("Números: ", numeros);
console.log(cumprimentar(nome)); // Saída: Olá, Arthur!