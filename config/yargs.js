const descripcion = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    }
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca completada o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Actualización de la tarea por hacer'
        },
        completado
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de la tarea por borrar'
        }
    })
    .help()
    .argv;

module.exports = { argv }