
const argv = require('./config/yargs').argv;
const porHacer = require('./mod/por-hacer');
const { string } = require('yargs');


let comando = argv._[0];

switch( comando ){
    case 'listar':
        let listado = porHacer.getListado();

        for(let tarea of listado){
            console.log('========Por hacer================================'.green)
            console.log(`Tarea: ${tarea.descripcion} \nEstado: ${tarea.completado}`)
            console.log('================================================='.green)
        }
        break;
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log( tarea );
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}