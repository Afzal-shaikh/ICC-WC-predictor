const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    {input:[0,0,0],output:[0]},
    {input:[0,0,1],output:[0]},
    {input:[0,1,0],output:[0]},
    {input:[1,0,0],output:[0]},
    {input:[1,1,0],output:[1]},
    {input:[1,0,1],output:[1]}


]);

const output1 = network.run([1,1,0]);
const output2 = network.run([0,1,0]);
const output3 = network.run([1,1,0]);


console.log(output1,output2,output3);
console.log(Math.round(output1));
console.log(Math.round(output2));
console.log(Math.round(output3));