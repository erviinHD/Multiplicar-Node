const { createFile, listMultipli } = require("./multiplicar/multiplicar");
const { argv } = require('./config/yargs')
const colors = require('colors');


let command = argv._[0];

switch (command) {
    case 'list':
        listMultipli(argv.base, argv.limit)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => {
                console.log(`Archivo: ${file.green} creado correctamente`);
            })
            .catch(err => {
                console.log(err);
            })
        break;

    default:
        console.log('Comando no reconocido');
        break;
}