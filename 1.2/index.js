import 'dotenv/config';
import fs from 'fs';
import parseFile from './lib/file';

const inputFile = process.env.INPUT_FILEPATH || './files/input.csv';
const outputFile = process.env.OUTPUT_FILEPATH || './files/output.txt';

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

parseFile(readStream, writeStream);