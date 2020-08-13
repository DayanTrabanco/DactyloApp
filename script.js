async function getData() {
  const gameDataReq = await fetch('http://pure-brushlands-81405.herokuapp.com/scores/user/' +  window.localStorage.getItem('username'));
  const gameData = await gameDataReq.json();
  const cleaned = gameData.map(game => ({
      score: game.score,
      createdOn: Date.parse(game.createdOn),
    }))
    .filter(game => (game.score != null));

  return cleaned;
}

async function run() {
  // Load and plot the original input data that we are going to train on.
  const data = await getData();
  const values = data.map(d => ({
    x: d.score,
    y: d.createdOn,
  }));

  // More code will be added below
  // Create the model
  const model = createModel();

  // Convert the data to a form we can use for training.
const tensorData = convertToTensor(data);
const {inputs, labels} = tensorData;

testModel(model, data, tensorData);

// Train the model
await trainModel(model, inputs, labels);
console.log('Done Training');
}

document.addEventListener('DOMContentLoaded', run);

function createModel() {
  // Create a sequential model
  const model = tf.sequential();

  // Add a single input layer
  model.add(tf.layers.dense({
    inputShape: [1],
    units: 1,
    useBias: true
  }));

  // Add an output layer
  model.add(tf.layers.dense({
    units: 1,
    useBias: true
  }));

  return model;
}

function convertToTensor(data) {
  // Wrapping these calculations in a tidy will dispose any
  // intermediate tensors.

  return tf.tidy(() => {
    // Step 1. Shuffle the data
    tf.util.shuffle(data);

    // Step 2. Convert data to Tensor
    const inputs = data.map(d => d.createdOn)
    const labels = data.map(d => d.score);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      // Return the min/max bounds so we can use them later.
      inputMax,
      inputMin,
      labelMax,
      labelMin,
    }
  });
}

async function trainModel(model, inputs, labels) {
  // Prepare the model for training.
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ['mse'],
  });


}

function testModel(model, inputData, normalizationData) {
  const {inputMax, inputMin, labelMin, labelMax} = normalizationData;

  // Generate predictions for a uniform range of numbers between 0 and 1;
  // We un-normalize the data by doing the inverse of the min-max scaling
  // that we did earlier.
  const [xs, preds] = tf.tidy(() => {

    const xs = tf.linspace(0, 1, 500);
    const preds = model.predict(xs.reshape([500, 1]));

    const unNormXs = xs
      .mul(inputMax.sub(inputMin))
      .add(inputMin);

    const unNormPreds = preds
      .mul(labelMax.sub(labelMin))
      .add(labelMin);

    // Un-normalize the data
    return [unNormXs.dataSync(), unNormPreds.dataSync()];
  });


  const predictedPoints = Array.from(xs).map((val, i) => {
    return {x: val, y: preds[i]}
  });

  const originalPoints = inputData.map(d => ({
    x: d.createdOn, y: d.score,
  }));

  // get AI score to determine the level of the last step
  // We have 4 levels of difficulty of words
  debugger;
  //take last predictions. it is always the date of today
  var score = predictedPoints[499].y;
  console.log(score);
  score = Math.abs(score)
  var level = 1;
  switch (true) {
    case (score <= 5000):
      level = 1;
      break;
    case (score > 5000 && score <= 10000):
      level = 2;
      break;
    case (score > 10000 && score <= 20000):
      level = 3;
      break;
    case (score > 20000):
      level = 4;
      break;
    default: level = 1;
    break;
  }
  var listOfWords = [""];
  console.log(level)
  var request = new XMLHttpRequest()
  request.open('GET', 'http://pure-brushlands-81405.herokuapp.com/words/both/' + level +',EN', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
      data.forEach(words => {

        //if sysDate === Date AI
          const letterWord = document.createElement('p')
          letterWord.textContent = words.word
          console.log(words.word)
          listOfWords.push(words.word);

        })
    } else {
      //
    }
    window.localStorage.setItem('listOfWords', listOfWords);
  }

  request.send()



}
