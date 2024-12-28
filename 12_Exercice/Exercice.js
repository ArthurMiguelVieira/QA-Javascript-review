/* 
JavaScript Practice Exercise:

Você precisará criar uma função JavaScript que fornecerá recomendações sobre qual carro uma família deve selecionar 
ao fazer uma reserva em um serviço de aluguel de carros com base em duas variáveis fornecidas: tamanho da família 
e distância planejada para dirigir.

Requisitos:
1. Crie duas variáveis iniciais chamadas "familySize" e "plannedDistanceToDrive". Atribua valores iniciais a elas, 
   por exemplo, 2 para "familySize" e 100 para "plannedDistanceToDrive".
2. Crie uma nova função chamada "recommendedCar" e passe as variáveis criadas como argumentos da função.
3. Escreva a lógica da função baseada nas seguintes condições:
   - Se "familySize" for 4 ou menos e a distância planejada for menor que 200 milhas, a função deve retornar "Tesla".
   - Se "familySize" for 4 ou menos e a distância planejada for 200 milhas ou mais, a função deve retornar "Toyota Camry".
   - Se "familySize" for maior que 4, a função deve retornar "Minivan".
4. Chame a função e exiba o resultado no console.

Resolução comentada:
*/

function recommendedCar(familySize, plannedDistanceToDrive) {
    // Condição 1: Tamanho da família é 4 ou menos e a distância é menor que 200 milhas.
    if (familySize <= 4 && plannedDistanceToDrive < 200) {
        return "Tesla"; // Carro ideal para grupos pequenos e viagens curtas.

    // Condição 2: Tamanho da família é 4 ou menos e a distância é 200 milhas ou mais.
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
        return "Toyota Camry"; // Opção confiável para viagens mais longas com grupos pequenos.

    // Condição 3: Tamanho da família é maior que 4.
    } else if (familySize > 4) {
        return "Minivan"; // Veículo espaçoso para acomodar famílias grandes.
    }
    // Observação: Este código não trata casos de entradas inválidas.
}

// Variáveis iniciais para teste.
let familySize = 2; // Tamanho da família.
let plannedDistanceToDrive = 100; // Distância planejada em milhas.

// Chamada da função e exibição do resultado.
console.log(recommendedCar(familySize, plannedDistanceToDrive)); // Saída esperada: "Tesla"
