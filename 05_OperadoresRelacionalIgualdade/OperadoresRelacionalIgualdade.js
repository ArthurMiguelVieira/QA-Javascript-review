// Operadores de Relacional e Igualdade em JavaScript

// 1. Operadores Relacionais
// - Usados para comparar valores, retornam `true` ou `false`.
// - Normalmente utilizados em condições e estruturas de controle.

const a = 10;
const b = 20;

// Maior que (>)
console.log(a > b); // Saída: false

// Menor que (<)
console.log(a < b); // Saída: true

// Maior ou igual (>=)
console.log(a >= 10); // Saída: true

// Menor ou igual (<=)
console.log(b <= 15); // Saída: false

// Comparação em strings (baseia-se na ordem lexicográfica(dicionario))
console.log("banana" > "abacaxi"); // Saída: true
console.log("cachorro" < "gato"); // Saída: true

// 2. Operadores de Igualdade
// - Comparações entre valores para verificar se são iguais ou diferentes.
// - Dois tipos principais: igualdade estrita e igualdade não estrita.

// Igualdade não estrita (==)
// - Converte automaticamente os tipos antes de comparar (coerção de tipo).
console.log(a == "10"); // Saída: true (o número 10 é convertido para string)

// Igualdade estrita (===)
// - Não converte os tipos. Os valores e os tipos devem ser iguais.
console.log(a === "10"); // Saída: false (número 10 não é igual à string "10")
console.log(a === 10); // Saída: true

// Diferença não estrita (!=)
// - Verifica se os valores são diferentes, realizando coerção de tipo.
console.log(a != "20"); // Saída: true (10 não é igual a 20, mesmo após coerção)

// Diferença estrita (!==)
// - Verifica se os valores e os tipos são diferentes.
console.log(a !== "10"); // Saída: true (número 10 é diferente de string "10")

// 3. Diferença entre `==` e `===`
// - `==` realiza coerção de tipo, então pode levar a resultados inesperados.
console.log(false == 0); // Saída: true (coerção: false vira 0)
console.log(false === 0); // Saída: false (tipos diferentes)

// - Para evitar erros, prefira usar `===` e `!==` sempre que possível.

// Exemplos práticos

// Comparação em condições
if (b > a) {
    console.log("b é maior que a"); // Saída: b é maior que a
}

const valor = "50";

// Comparação estrita em um switch
switch (valor) {
    case 50: // Não será executado, porque 50 (número) !== "50" (string)
        console.log("Valor é 50");
        break;
    case "50": // Será executado, porque o tipo e valor coincidem
        console.log("Valor é uma string '50'"); // Saída: Valor é uma string '50'
        break;
    default:
        console.log("Valor desconhecido");
}
