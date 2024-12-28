// Declarações Condicionais em JavaScript

// 1. if...else
// - Usado para executar blocos de código diferentes com base em uma condição.

const idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade."); // Saída: Você é maior de idade.
} else {
    console.log("Você é menor de idade.");
}

// 2. if...else if...else
// - Permite testar múltiplas condições em sequência.

const nota = 85;

if (nota >= 90) {
    console.log("Nota: A"); // Não será executado
} else if (nota >= 80) {
    console.log("Nota: B"); // Saída: Nota: B
} else if (nota >= 70) {
    console.log("Nota: C");
} else {
    console.log("Nota: F");
}

// 3. switch
// - Usado quando há múltiplos casos possíveis para uma mesma variável ou expressão.

const cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("Cor favorita: vermelho");
        break;
    case "azul":
        console.log("Cor favorita: azul"); // Saída: Cor favorita: azul
        break;
    case "verde":
        console.log("Cor favorita: verde");
        break;
    default:
        console.log("Cor não reconhecida");
}

// 4. Operador Condicional Ternário
// - Uma forma curta de escrever condições simples.

const permissao = idade >= 18 ? "Permitido" : "Negado";
console.log(permissao); // Saída: Permitido

// 5. Nested if (if aninhado)
// - Um if dentro de outro, usado para condições mais detalhadas.

const usuario = "admin";
const senha = "1234";

if (usuario === "admin") {
    if (senha === "1234") {
        console.log("Acesso concedido"); // Saída: Acesso concedido
    } else {
        console.log("Senha incorreta");
    }
} else {
    console.log("Usuário não reconhecido");
}

// 6. Curiosidade: if com valores não booleanos
// - Qualquer valor pode ser avaliado como booleano (truthy ou falsy).
// - Valores "falsy": `false`, `0`, `""`, `null`, `undefined`, `NaN`.
// - Qualquer outro valor é "truthy".

if (0) {
    console.log("Isso não será exibido"); // 0 é falsy
}

if ("Texto") {
    console.log("Isso será exibido"); // Strings não vazias são truthy
}

const valor = null;
if (!valor) {
    console.log("Valor é falsy"); // Saída: Valor é falsy
}

// Exemplos práticos

// Exemplo 1: Avaliação de idade para permissões
const podeDirigir = idade >= 18 ? "Sim" : "Não";
console.log(`Pode dirigir? ${podeDirigir}`); // Saída: Pode dirigir? Sim

// Exemplo 2: Switch para identificar dia da semana
const dia = 3;

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira"); // Saída: Quarta-feira
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    default:
        console.log("Final de semana");
}
