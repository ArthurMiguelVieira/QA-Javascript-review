// Objetos e Arrays em JavaScript

// 1. Objetos
// - Objetos são coleções de pares chave-valor usados para armazenar dados estruturados.
// - Cada chave (também chamada de propriedade) é única dentro de um objeto.
// - Os valores podem ser de qualquer tipo: strings, números, funções, outros objetos, etc.

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
};

// Acessando propriedades de objetos
console.log(pessoa.nome); // Saída: João
console.log(pessoa["idade"]); // Saída: 25

// Modificando propriedades
pessoa.idade = 26;
console.log(pessoa.idade); // Saída: 26

// Adicionando novas propriedades
pessoa.hobby = "Tocar violão";
console.log(pessoa.hobby); // Saída: Tocar violão

// Removendo propriedades
delete pessoa.profissao;
console.log(pessoa.profissao); // Saída: undefined

// Objetos também podem conter métodos (funções)
pessoa.saudacao = function() {
    return `Olá, meu nome é ${this.nome}!`;
};
console.log(pessoa.saudacao()); // Saída: Olá, meu nome é João!

// 2. Arrays
// - Arrays são listas ordenadas de valores, identificados por índices numéricos.
// - Podem armazenar qualquer tipo de dado: strings, números, objetos, outros arrays, etc.

const frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array
console.log(frutas[0]); // Saída: maçã
console.log(frutas[2]); // Saída: laranja

// Adicionando elementos
frutas.push("uva"); // Adiciona ao final
console.log(frutas); // Saída: ["maçã", "banana", "laranja", "uva"]

frutas.unshift("manga"); // Adiciona ao início
console.log(frutas); // Saída: ["manga", "maçã", "banana", "laranja", "uva"]

// Removendo elementos
frutas.pop(); // Remove o último elemento
console.log(frutas); // Saída: ["manga", "maçã", "banana", "laranja"]

frutas.shift(); // Remove o primeiro elemento
console.log(frutas); // Saída: ["maçã", "banana", "laranja"]

// Percorrendo arrays
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});
// Saída:
// Fruta 1: maçã
// Fruta 2: banana
// Fruta 3: laranja

// Arrays podem conter objetos
const carrinho = [
    { produto: "Notebook", preco: 3000 },
    { produto: "Mouse", preco: 50 },
    { produto: "Teclado", preco: 100 }
];

// Somando os preços dos produtos no carrinho
const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
console.log(`Total: R$${total}`); // Saída: Total: R$3150

// 3. Diferenças principais entre objetos e arrays
// - Objetos: usados para representar dados estruturados, geralmente não ordenados.
// - Arrays: usados para armazenar listas ordenadas de valores.
// - Ambos podem ser usados juntos para modelar dados mais complexos.
