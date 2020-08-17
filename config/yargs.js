
const create = {
        
        descripcion: { 
            demand: true, 
            alias: 'd', 
            desc: 'Descripcion de tarea por hacer' 
        }
}

const del = {
        
    descripcion: { 
        demand: true, 
        alias: 'd', 
        desc: 'Eliminar tarea completada' 
    }
}

const  update = {

    descripcion: { 
        demand: true, 
        alias: 'd', 
        desc: 'Descripcion de actualizacion'
        }, 
    completado: { 
        alias: 'c', 
        default: true, 
        desc: 'Marca como completado'
    } 
}

const argv = require('yargs')
            .command('listar', 'Mostrar los elementos en pantalla')
            .command('crear', 'crear un elemento por hacer', create)
            .command('actualizar', 'Actualiza el estado del archivo', update)
            .command('borrar', 'Elimina los elementos del archivo de tareas', del)
            .help()
            .argv;

module.exports = {
                    argv
                }                          
