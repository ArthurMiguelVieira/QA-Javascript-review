// Operadores Lógicos em JavaScript

// 1. Operadores Lógicos
// - Usados para combinar ou inverter condições, retornam `true` ou `false`.
// - Combinam expressões booleanas para criar lógica mais complexa.

// Operador E (&&)
// - Retorna `true` se todas as condições forem verdadeiras.
const a = 10;
const b = 20;

console.log(a > 5 && b > 15); // Saída: true (ambas as condições são verdadeiras)
console.log(a > 15 && b > 15); // Saída: false (a > 15 é falso)

// Operador OU (||)
// - Retorna `true` se pelo menos uma das condições for verdadeira.
console.log(a > 15 || b > 15); // Saída: true (b > 15 é verdadeiro)
console.log(a > 15 || b < 15); // Saída: false (nenhuma condição é verdadeira)

// Operador NÃO (!)
// - Inverte o valor lógico de uma condição.
const isTrue = true;
console.log(!isTrue); // Saída: false (inverte o valor de true para false)

console.log(!(a > 15)); // Saída: true (a > 15 é falso, e !falso é verdadeiro)

// 2. Operadores Lógicos com Valores Não-Booleanos
// - JavaScript tenta converter os valores em booleanos (truthy ou falsy) quando necessário.
// - Valores "falsy": `false`, `0`, `""`, `null`, `undefined`, `NaN`.
// - Todos os outros valores são "truthy".

// Exemplo com &&
// - Retorna o primeiro valor "falsy" ou o último valor "truthy".
console.log("Texto" && 42); // Saída: 42 (ambos são truthy, retorna o último)
console.log(null && "Texto"); // Saída: null (primeiro valor falsy)

// Exemplo com ||
// - Retorna o primeiro valor "truthy" ou o último valor "falsy".
console.log("Texto" || 42); // Saída: Texto (primeiro valor truthy)
console.log(null || 42); // Saída: 42 (null é falsy, então retorna 42)

// Exemplo com !
// - Converte o valor para booleano e inverte.
console.log(!"Texto"); // Saída: false ("Texto" é truthy, então !truthy é falso)
console.log(!0); // Saída: true (0 é falsy, então !falsy é verdadeiro)

// 3. Combinações de Operadores Lógicos
// - Podem ser usados juntos para criar condições complexas.

const idade = 25;
const temCarteira = true;

// Exemplo prático: Pode dirigir?
if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir!"); // Saída: Pode dirigir!
} else {
    console.log("Não pode dirigir.");
}

// Exemplo com múltiplos operadores
const nome = "João";
const permissao = false;

if ((idade >= 18 && temCarteira) || nome === "João") {
    console.log("Acesso permitido."); // Saída: Acesso permitido.
} else {
    console.log("Acesso negado.");
}

// 4. Curto-circuito nos Operadores
// - Operadores lógicos podem "curto-circuitar", ou seja, parar de avaliar assim que o resultado é determinado.
// - Para `&&`: Para na primeira condição falsy.
// - Para `||`: Para na primeira condição truthy.

console.log(false && "Texto"); // Saída: false (curto-circuito no primeiro valor falsy)
console.log(true || "Outro Texto"); // Saída: true (curto-circuito no primeiro valor truthy)

// Exemplo prático: Valor padrão
const usuario = null;
const nomeUsuario = usuario || "Visitante";
console.log(nomeUsuario); // Saída: Visitante (usuario é null, então retorna o valor padrão)
