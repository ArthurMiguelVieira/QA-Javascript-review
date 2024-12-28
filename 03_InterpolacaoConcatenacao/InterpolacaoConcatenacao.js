// Interpolação e concatenação em JavaScript

// 1. Interpolação
// - A interpolação é uma forma moderna de combinar strings e valores em JavaScript.
// - É realizada usando template literals (ou literais de template), que são strings delimitadas por crases (`).
// - Permite incorporar variáveis e expressões diretamente dentro da string utilizando a sintaxe `${}`.
// - É mais legível e prática do que a concatenação para muitas situações.

const nome = "João";
const idade = 25;
const cidade = "São Paulo";

// Exemplo de interpolação
const mensagemInterpolacao = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
console.log(mensagemInterpolacao); // Saída: Meu nome é João, tenho 25 anos e moro em São Paulo.

// Também permite realizar cálculos ou executar funções dentro da interpolação
const anoAtual = 2024;
const anoNascimento = anoAtual - idade;

const mensagemComCalculo = `Eu nasci no ano de ${anoAtual - idade}.`;
console.log(mensagemComCalculo); // Saída: Eu nasci no ano de 1999.

// 2. Concatenação
// - A concatenação é a forma tradicional de unir strings em JavaScript.
// - É feita utilizando o operador de adição (+).
// - Embora seja funcional, pode ser menos legível e mais propensa a erros em textos longos ou complexos.

const mensagemConcatenacao = "Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + ".";
console.log(mensagemConcatenacao); // Saída: Meu nome é João, tenho 25 anos e moro em São Paulo.

// Concatenação também pode incluir cálculos e funções
const mensagemComCalculoConcatenacao = "Eu nasci no ano de " + (anoAtual - idade) + ".";
console.log(mensagemComCalculoConcatenacao); // Saída: Eu nasci no ano de 1999.

// 3. Diferenças entre interpolação e concatenação
// - Interpolação: mais moderna, legível e permite usar expressões diretamente dentro da string.
// - Concatenação: tradicional, pode ser usada em ambientes antigos que não suportam ES6.

// Comparação direta de legibilidade
const mensagemLegivel = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`; // Interpolação
const mensagemMenosLegivel = "Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidade + "."; // Concatenação

console.log(mensagemLegivel);
console.log(mensagemMenosLegivel);
