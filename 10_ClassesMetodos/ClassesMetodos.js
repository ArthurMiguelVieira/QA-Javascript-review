// Classes e Métodos em JavaScript

// 1. Definição de Classe
// - Usadas para criar objetos com propriedades e métodos.
// - Introduzidas no ES6, mas são sintaxe para o sistema baseado em protótipos.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome; // Propriedade
        this.idade = idade; // Propriedade
    }

    // Método
    cumprimentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando uma instância da classe
const joao = new Pessoa("João", 25);
console.log(joao.cumprimentar()); // Saída: Olá, meu nome é João e tenho 25 anos.

// 2. Herança
// - Permite que uma classe herde propriedades e métodos de outra.

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade); // Chama o construtor da classe pai
        this.curso = curso; // Nova propriedade
    }

    // Sobrescrita de método
    cumprimentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`;
    }
}

const maria = new Estudante("Maria", 22, "Ciência da Computação");
console.log(maria.cumprimentar()); // Saída: Olá, meu nome é Maria, tenho 22 anos e estudo Ciência da Computação.

// 3. Métodos Estáticos
// - Pertencem à classe e não às instâncias da classe.

class Matematica {
    static somar(a, b) {
        return a + b;
    }

    static multiplicar(a, b) {
        return a * b;
    }
}

console.log(Matematica.somar(5, 3)); // Saída: 8
console.log(Matematica.multiplicar(4, 2)); // Saída: 8

// 4. Getters e Setters
// - Usados para obter e definir valores de propriedades com lógica adicional.

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco; // Convenção para propriedade "privada"
    }

    get preco() {
        return `R$ ${this._preco.toFixed(2)}`;
    }

    set preco(novoPreco) {
        if (novoPreco > 0) {
            this._preco = novoPreco;
        } else {
            console.log("O preço deve ser positivo.");
        }
    }
}

const item = new Produto("Notebook", 3000);
console.log(item.preco); // Saída: R$ 3000.00
item.preco = 3500;
console.log(item.preco); // Saída: R$ 3500.00
item.preco = -200; // Saída: O preço deve ser positivo.

// 5. Campos Privados
// - Introduzidos no ES2022, são propriedades realmente privadas, iniciadas com `#`.

class ContaBancaria {
    #saldo = 0; // Propriedade privada

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        }
    }

    obterSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria();
conta.depositar(500);
console.log(conta.obterSaldo()); // Saída: 500
// console.log(conta.#saldo); // Erro: Não é possível acessar propriedades privadas diretamente.

// 6. Classes Abstratas
// - Em JavaScript, não há suporte direto para classes abstratas, mas você pode simulá-las.

class Forma {
    constructor() {
        if (this.constructor === Forma) {
            throw new Error("Não é possível instanciar uma classe abstrata.");
        }
    }

    calcularArea() {
        throw new Error("O método calcularArea deve ser implementado.");
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
}

const circulo = new Circulo(5);
console.log(circulo.calcularArea()); // Saída: 78.53981633974483

// Exemplos Práticos

// Exemplo 1: Criar uma classe para gerenciar uma lista de tarefas
class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }

    listarTarefas() {
        return this.tarefas;
    }
}

const lista = new ListaDeTarefas();
lista.adicionarTarefa("Estudar JavaScript");
lista.adicionarTarefa("Fazer exercícios");
console.log(lista.listarTarefas()); // Saída: ["Estudar JavaScript", "Fazer exercícios"]

// Exemplo 2: Classe com métodos estáticos para converter temperaturas
class ConversorDeTemperatura {
    static celsiusParaFahrenheit(celsius) {
        return celsius * 1.8 + 32;
    }

    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) / 1.8;
    }
}

console.log(ConversorDeTemperatura.celsiusParaFahrenheit(25)); // Saída: 77
console.log(ConversorDeTemperatura.fahrenheitParaCelsius(77)); // Saída: 25
