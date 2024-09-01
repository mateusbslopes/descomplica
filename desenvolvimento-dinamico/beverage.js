/**
 * FACULDADE ALURA
 * CURSO ANALISE E DESENVOLVIMENTO DE SISTEMAS
 * MATERIA DESENVOVIMENTO DINAMICO
 * ALUNO MATEUS BARBOSA SIQUEIRA LOPES @mateusbslopes
 * node 20.13.1
 * MACOS SONOMA 14.4.1 (23E224)
 */


const BEVERAGES = {
    'cha': {
        value: 1.5
    },
    'cafe': {
        value: 3
    },
    'leite': {
        value: 2
    }
}

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Qual o bebida voce gostaria?\n", beverage => {
    beverage = beverage.trim();
    switch (beverage) {
        case 'cha':
            console.log(`A bebida ${beverage} custa ${BEVERAGES[beverage].value.toFixed(2)}`);
            break;
        case 'leite':
            console.log(`A bebida ${beverage} custa ${BEVERAGES[beverage].value.toFixed(2)}`);
            break;
        case 'cafe':
            console.log(`A bebida ${beverage} custa ${BEVERAGES[beverage].value.toFixed(2)}`);
            break;
        default:
            console.log(`Infelizmente nao possuimos ${beverage}, por favor escolha entre ${Object.keys(BEVERAGES).join(',')}\n`);
            break;
    }
    process.exit(0)
})