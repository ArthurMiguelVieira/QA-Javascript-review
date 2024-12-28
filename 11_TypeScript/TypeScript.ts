// TypeScript vs JavaScript
// TypeScript é um superset (superconjunto) de JavaScript, que adiciona tipagem estática e outros recursos ao JavaScript.

// 1. Diferença Principal: Tipagem Estática
// - JavaScript: Tipagem dinâmica; os tipos das variáveis são determinados em tempo de execução.
let variavelJS = "Sou um texto";
//variavelJS = 42; // Permitido em JavaScript, mesmo que o tipo mude.

// - TypeScript: Tipagem estática; os tipos são definidos em tempo de compilação.
let variavelTS: string = "Sou um texto";
// variavelTS = 42; // Erro: Não é possível atribuir um número a uma variável do tipo string.

// 2. Suporte a Tipos
// - TypeScript adiciona suporte a tipos explícitos.

let numeroTS: number = 10; // Variável do tipo número.
let textoTS: string = "Olá, TypeScript!";
let booleanoTS: boolean = true;

// 3. Interfaces e Tipos Personalizados
// - TypeScript permite definir interfaces para modelar objetos e garantir consistência.

interface Pessoa {
    nome: string;
    idade: number;
    saudacao?: () => string; // Método opcional.
}

const pessoaTS: Pessoa = {
    nome: "João",
    idade: 30,
    saudacao: () => "Olá!",
};

console.log(pessoaTS.nome); // Saída: João
console.log(pessoaTS.saudacao?.()); // Saída: Olá!

// 4. Tipos Avançados
// - TypeScript suporta tipos como Union, Intersection e Generics.

type Resultado = "sucesso" | "erro"; // União de tipos.

function processarResultado(status: Resultado) {
    console.log(`Status: ${status}`);
}

processarResultado("sucesso"); // Válido.
// processarResultado("pendente"); // Erro: "pendente" não é um valor permitido.

// Generics: Reutilização de tipos.
function identidade<T>(valor: T): T {
    return valor;
}

console.log(identidade<number>(42)); // Saída: 42
console.log(identidade<string>("Texto")); // Saída: Texto

// 5. Compilação
// - TypeScript é transpilado para JavaScript antes de ser executado.
// - Isso significa que TypeScript não é diretamente interpretado pelos navegadores.

const saudacaoJS = "Olá, Mundo!"; // JavaScript executável diretamente.
const saudacaoTS: string = "Olá, TypeScript!"; // Precisa ser transpilado para JavaScript.

// 6. Controle Estrito
// - TypeScript possui modos como `strict` para forçar maior rigor na validação de tipos.

function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(5, 10)); // Saída: 15
// console.log(somar(5, "10")); // Erro: Argumento "b" deve ser um número.

// 7. Recursos Exclusivos do TypeScript
// - TypeScript adiciona vários recursos ausentes no JavaScript:

// 7.1 Enum
enum Cores {
    Vermelho,
    Verde,
    Azul,
}
const minhaCor: Cores = Cores.Verde;
console.log(minhaCor); // Saída: 1

// 7.2 Classes com Tipos
class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log(`${this.nome} fez um som.`);
    }
}

const cachorro = new Animal("Cachorro");
cachorro.emitirSom(); // Saída: Cachorro fez um som.

// 7.3 Modificadores de Acesso
class Conta {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const minhaConta = new Conta(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo()); // Saída: 1500
// console.log(minhaConta.saldo); // Erro: "saldo" é privado.

// Resumo Geral:
// - **JavaScript** é flexível e dinâmico, ideal para prototipagem rápida e uso direto em navegadores.
// - **TypeScript** é mais rigoroso, fornece ferramentas de tipagem estática, facilita a manutenção e reduz erros em projetos grandes.
// - TypeScript é especialmente útil para equipes e projetos de longo prazo, onde o código precisa ser mais confiável e previsível.
