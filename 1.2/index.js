require('dotenv').config();
const fs = require('fs');
const parseFile = require('./lib/file');

const inputFile = process.env.INPUT_FILEPATH || './files/input.csv';
const outputFile = process.env.OUTPUT_FILEPATH || './files/output.txt';

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

parseFile(readStream, writeStream);