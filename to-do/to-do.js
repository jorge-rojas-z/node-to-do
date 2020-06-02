const fs = require('fs')
const colors = require('colors');


let listadoPorHacer = [];

const saveDB = () => {
    //con esto tomamos un objeto y lo pasamos a formato JSON

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, err => {
        //if (err) console.log('no se pudo grabar', err);
        if (err) throw new Error('no se grabo nada', err);
    });

}

const readDB = () => {
    try {
        //el require reconoce el json, lo serializa y lo carga como un
        //arreglo de objetos
        listadoPorHacer = require('../db/data.json');
        return listadoPorHacer;
    } catch (err) {
        listadoPorHacer = [];
    }

    return listadoPorHacer;
}

const crear = (descripcion) => {

    readDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    //guardamos en lista
    listadoPorHacer.push(porHacer);
    saveDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    readDB();
    //console.log(listadoPorHacer);
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion);
    //console.log(index);
    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    readDB();
    //console.log(listadoPorHacer);
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion);
    //console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        saveDB();
        return true;
    } else {
        console.log(colors.red('No se ha encontrado la tarea.'));
        return false;
    }
}

module.exports = { crear, saveDB, readDB, actualizar, borrar }