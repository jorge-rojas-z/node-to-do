const colors = require('colors')
const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do').crear;
const guardar = require('./to-do/to-do').saveDB;
const leerTodo = require('./to-do/to-do').readDB;
const actualizar = require('./to-do/to-do').actualizar;
const borrar = require('./to-do/to-do').borrar;

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('crear tarea');
        let tarea = porHacer(argv.descripcion);
        //guardar();
        console.log(tarea);
        break;
    case 'listar':
        //console.log('mostrar todas las tareas');
        let listaTareas = leerTodo();
        if (listaTareas.length > 0) {
            for (let tarea of listaTareas) { // ojo con el of
                console.log('=======Por Hacer======='.green);
                console.log('Tarea: ', tarea.descripcion);
                if (tarea.completado) {
                    console.log(colors.green('Estado: ', tarea.completado));
                } else {
                    console.log(colors.red('Estado: ', tarea.completado));
                }
            }
        } else {
            console.log(colors.red('Lista de tareas vacia'));
        }

        break;
    case 'actualizar':
        //console.log('actualizar tarea');
        let actualizado = actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log(colors.green('Actualizacion completada'));
        } else {
            console.log(colors.red('Actualizacion fallida'));
        }
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        if (borrado) {
            console.log(colors.green('borrado completado'));
        } else {
            console.log(colors.red('borrado fallido'));
        }
        break;

    default:
        console.log('comando no valido');
        break;
}