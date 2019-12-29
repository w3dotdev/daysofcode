// ml.js - Machine learning and numerical analysis tools in JavaScript for Node.js and the Browser !
// https://github.com/mljs
//
// UC Irvine Machine Learning Repository
// http://archive.ics.uci.edu/ml/machine-learning-databases/
//
const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');

const csvFilePath = 'iris.csv';
const names = ['sepalLength', 'sepalWidth', 'petalLength', 'petalWidth', 'type'];

class Iris {
  constructor() {
    this.knn;

    this.data = [];
    this.X = [];
    this.y = [];

    this.trainingSetX = [];
    this.trainingSetY = [];
    this.testSetX = [];
    this.testSetY = [];

    this.seperationSize;
    this.typesArray;

    this.init();
  }

  init() {
    csv({noheader: true, headers: names})
      .fromFile(csvFilePath)
      .then(jsonObj => {
        this.seperationSize = 0.7 * jsonObj.length;

        const data = this.shuffleArray(jsonObj);
        this.dressData(data);
      });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  dressData(data) {
    const types = new Set();

    data.forEach((row) => {
      types.add(row.type);
    });

    this.typesArray = [...types];

    data.forEach((row) => {
      const rowArray = Object.keys(row).map(key => parseFloat(row[key])).slice(0, 4);
      const typeNumber = this.typesArray.indexOf(row.type);

      this.X.push(rowArray);
      this.y.push(typeNumber);
    });

    this.trainingSetX = this.X.slice(0, this.seperationSize);
    this.trainingSetY = this.y.slice(0, this.seperationSize);
    this.testSetX = this.X.slice(this.seperationSize);
    this.testSetY = this.y.slice(this.seperationSize);

    this.train();
  }

  train() {
    this.knn = new KNN(this.trainingSetX, this.trainingSetY, { k:7 });
    this.test();
  }

  test() {
    const result = this.knn.predict(this.testSetX);
    const testSetLength = this.testSetX.length;
    const predictionError = this.error(result, this.testSetY);
    console.log(`Tamanho do conjunto de teste = ${testSetLength} e número de erros de classificação = ${predictionError}`);
    this.predict();
  }

  predict() {
    const temp = [];
    prompt.start();

    prompt.get(['Comprimento da sépala', 'Largura da sépala', 'Comprimento da pétala', 'Largura da pétala'], (err, result) => {
      if (!err) {
        for (let key in result) {
          temp.push(parseFloat(result[key]));
        }
        console.log(`${temp} -- espécie =  ${this.typesArray[this.knn.predict(temp)]}`);
      }
    });
  }

  error(predicted, expected) {
    let misclassifications = 0;
    for (let index = 0; index < predicted.length; index++) {
      if (predicted[index] !== expected[index]) {
        misclassifications++;
      }
    }
    return misclassifications;
  }
}

new Iris();
console.log(1, `Dados com 3 tipos diferentes de comprimento de pétalas e sépalas de íris (Setosa, Versicolour e Virginica)`);
