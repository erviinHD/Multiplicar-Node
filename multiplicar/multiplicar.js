const fs = require("fs");
const colors = require('colors');

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`.red);
            return;
        }

        let producto = "";
        for (let index = 1; index <= limit; index++) {
            producto += `${base} * ${index} = ${base * index} \n`;
        }

        const data = new Uint8Array(Buffer.from(producto));

        fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla del ${base}.txt`);
        });
    });
};

let listMultipli = (base, limit = 10) => {
    console.log('==============================='.green);
    console.log(`====== Tabla del ${base} ======`.green);
    console.log('==============================='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            reject(`${base} o ${limit} no son un numero`.red);
            return;
        }

        let producto = "";
        for (let index = 1; index <= limit; index++) {
            producto += `${base} * ${index} = ${base * index} \n`;
        }

        console.log(producto)

    });
}

module.exports = {
    createFile,
    listMultipli
};