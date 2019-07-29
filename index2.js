const brain = require('brain.js');

const matches = require('./data2.json');

const network = new brain.recurrent.LSTM();

const trainingData = matches.map(match=>({
    input:[match.team1,match.team2],
    output:match.winner
}))

network.train(trainingData,{
    iterations:5000
});

// const output = network.run("IND","NZ");
const output = network.run("PAK","ENG");

// console.log(` In a match between ${team1} and ${team2} , winner is${output}`);
console.log(output);