// Funções em JavaScript

// 1. Declaração de Função (Function Declaration)
// - Uma função declarada pode ser chamada antes de sua definição devido ao hoisting.

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("João")); // Saída: Olá, João!

// 2. Expressão de Função (Function Expression)
// - Uma função atribuída a uma variável.
// - Não é possível chamá-la antes de sua definição.

const somar = function (a, b) {
    return a + b;
};

console.log(somar(5, 10)); // Saída: 15

// 3. Arrow Functions (Funções de Seta)
// - Uma sintaxe mais curta para escrever funções.
// - Não possui seu próprio `this`.

const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4)); // Saída: 12

// 4. Funções Aninhadas
// - Uma função pode ser definida dentro de outra.

function externa() {
    console.log("Função externa");

    function interna() {
        console.log("Função interna");
    }

    interna();
}

externa();
// Saída:
// Função externa
// Função interna

// 5. Parâmetros Padrão
// - Permite definir valores padrão para os parâmetros.

function dividir(a, b = 1) {
    return a / b;
}

console.log(dividir(10)); // Saída: 10
console.log(dividir(10, 2)); // Saída: 5

// 6. Funções como Argumentos
// - Funções podem ser passadas como argumentos para outras funções.

function executar(funcao, a, b) {
    return funcao(a, b);
}

console.log(executar(somar, 7, 3)); // Saída: 10
console.log(executar(multiplicar, 7, 3)); // Saída: 21

// 7. Funções Recursivas
// - Uma função que chama a si mesma.

function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

console.log(fatorial(5)); // Saída: 120

// 8. Funções com Rest Parameter
// - Permite passar um número variável de argumentos.

function somaTudo(...numeros) {
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

console.log(somaTudo(1, 2, 3, 4, 5)); // Saída: 15

// 9. Closures
// - Uma função "lembra" do escopo em que foi criada.

function contador() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const incrementar = contador();
console.log(incrementar()); // Saída: 1
console.log(incrementar()); // Saída: 2

// 10. Funções Assíncronas
// - Utilizadas com `async` e `await` para lidar com operações assíncronas.

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exemploAssincrono() {
    console.log("Início");
    await esperar(2000); // Aguarda 2 segundos
    console.log("Fim");
}

exemploAssincrono();
// Saída:
// Início
// (Aguarda 2 segundos)
// Fim

// Exemplos Práticos

// Exemplo 1: Calcular o quadrado de números em um array com map
const numeros = [1, 2, 3, 4];
const quadrados = numeros.map((n) => n ** 2);
console.log(quadrados); // Saída: [1, 4, 9, 16]

// Exemplo 2: Verificar números pares em um array com filter
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // Saída: [2, 4]

// Exemplo 3: Mensagem personalizada com closures
function saudacaoPersonalizada(mensagem) {
    return function (nome) {
        return `${mensagem}, ${nome}!`;
    };
}

const ola = saudacaoPersonalizada("Olá");
const bemVindo = saudacaoPersonalizada("Bem-vindo");

console.log(ola("Maria")); // Saída: Olá, Maria!
console.log(bemVindo("João")); // Saída: Bem-vindo, João!
