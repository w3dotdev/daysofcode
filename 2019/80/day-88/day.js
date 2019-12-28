// Brain.js - GPU accelerated Neural networks in JavaScript for Browsers and Node.js
// https://brain.js.org/#/getting-started
//
const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// https://jsonformatter.curiousconcept.com/
const tweets1 = require('./tweets1.json');
const tweets2 = require('./tweets2.json');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
const normalize = string => {
  const MAX = 200;
  const input = [];
  const len = string.length;

  for (let i = 0; i < len; i++) {
    input.push(string.charCodeAt(i) / 1000);
  }

  for (let i = len; i < MAX; i++) {
    input.push(0);
  }

  return input;
};
let trained;

const training = data => {
  return data.map(item => {
    return {
      input: normalize(item.input),
      output: item.output
    }
  })
}

const train = data => {
  net.train(training(data), {
    iterations: 200,
    log: stats => console.log(stats),
    errorThresh: 0.0110,
    learningRate: 0.6
  });
  trained = net.toFunction();
  console.log('Fim do treino');
};

const execute = input => {
  const results = trained(normalize(input));
  let output;
  let perc;

  if (results.pefabiodemelo > results.evaristocosta) {
    output = 'pefabiodemelo';
    perc = Math.floor(results.pefabiodemelo * 100);
  } else {
    output = 'evaristocosta';
    perc = Math.floor(results.evaristocosta * 100);
  }

  return `Eu tenho ${perc}% de certeza que é um tweet do ${output}`;
};

const trainingData = [ ...tweets1, ...tweets2 ];
train(trainingData);

// pefabiodemelo
console.log(1, 'Meus queridos, vou ficando por aqui. Tenho uma saúde emocional a ser cuidada....');
console.log(1, execute('Meus queridos, vou ficando por aqui. Tenho uma saúde emocional a ser cuidada. Sei o quanto já provei a solidão prov… https://t.co/Exwlw24FAW'));
console.log('----------------------------------------------------------------------------------------');
// evaristocosta
console.log(2, 'Já solicitei formalmente transferência de setor dentro do Palácio....');
console.log(2, execute('Já solicitei formalmente transferência de setor dentro do Palácio. Fontes reais dizem que Eli já autorizou. https://t.co/G8KJPgQtEa'));
