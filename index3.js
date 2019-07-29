const brain = require('brain.js');

const data = require('./data3.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(match=>({
    input:[match.team1,match.team2],
    output:match.winner
}))

network.train(trainingData,{
    iterations:2000
});

const output = network.run("IND","N_Z");
// const output = network.run("IND","PAK");

console.log(output);