const readline = require('readline');

const getObj = (propsArr, valsArr) =>
    propsArr.reduce((acc, curr, ind) => ({[curr]: valsArr[ind], ...acc}), {});

const parseFile = (readStream, writeStream) => {
    let props = [];
    let vals = [];

    const rl = readline.createInterface({
        input: readStream,
    });

    rl.on('line', (line) => {
        const lineArr = line.split(',');
        if (!props.length) {
            // set props
            return props = lineArr.map(el => el.toLowerCase());
        }
        vals = lineArr;
        const obj = getObj(props, vals);
        writeStream.write(`${JSON.stringify(obj)}\n`);
    });

    rl.on('close', () => {
        // close the write stream
        writeStream.end();
        console.log('Success');
    });

    // handle error
    readStream.on('error', (err) => {
        console.error('Error while reading inputFile', err)
    });
};

module.exports = parseFile;