const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const reverse = (input) => input.split('').reverse().join('');

rl.on('line', (input) => {
    process.stdout.write(reverse(input) + '\n');
});