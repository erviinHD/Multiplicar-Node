const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', opts)
    .command('create', 'Genera un archivo tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}