console.log("Ejercicio");

/*

1. Crear una app que sirva como directorio para registrar usuarios.
2. Debe tener las siguiente opciones:
    1. Nuevo registro.
    2. Buscar registro.
    3. Salir.
3. Los contactos registrados deben tener los siguiente atributos:
    - ID. Debe incrementarse en uno cada vez que se agrega un nuevo registro. Este valor es automático.
    - Nombre: Nombre del contacto.
    - Telefono: Teléfono del contacto.
    - Dirección: Dirección del contacto.
4. La opción de "buscar contacto" debe mostrar todos los datos que se registraron del contacto, incluyendo el ID.
5. El menú debe estar manejado con enums.
6. Deben usarse funciones.


Cómo buscar los contactos.

Para buscar un contacto es necesario usar la funcion "includes(string_a_buscar)".
*/

let directorio = [];
let opcionSeleccionada = 0;
let id = 1;

// Enum (imitación)
let Opciones = {
    NUEVO_REGISTRO: 1,
    BUSCAR_REGISTRO: 2,
    SALIR: 3,
}

function nuevoRegistro(){
    // Iniciar el proceso de registro de contacto.

    let nombre = prompt("Ingresa el nombre del contacto: ");
    let telefono = prompt("Ingresa el teléfono del contacto");
    let direccion = prompt("Ingresa la dirección del contacto.");

    insertarRegistro(nombre, telefono, direccion);

    alert("Contacto ha sido registrado correctamente!");
}

function insertarRegistro(nombre, telefono, direccion){
    // Esta función verdaderamente va a registrar la información.

    let contacto = {
        id: id++,
        nombre,
        telefono,
        direccion,
    }

    directorio.push(contacto);
}

function buscarRegistro(){
    // Iniciar el proceso de buscar contacto

    const nombre = prompt("Ingresa el nombre del contacto:");

    const contacto = obtenerRegistro(nombre);

    const resultado = contacto !== null ? `ID: ${ contacto.id }\nNombre: ${ contacto.nombre }\nTeléfono: ${ contacto.telefono}\nDirección: ${ contacto.direccion }` : "Contacto inexistente!";

    alert(resultado);
}

function obtenerRegistro(nombre){
    // Función que va a extraer la información

    let contacto = null;

    for(let i = 0; i < directorio.length; i++){
        let usuarioExiste = directorio[i].nombre.includes(nombre);
        if(usuarioExiste){
            contacto = directorio[i];
            break;
        }
    }
    return contacto;
}

function salir(){
    alert("Saliendo de la aplicación.");
}

function accionInvalida(){
    alert("Esa acción no existe. Intentar nuevamente!");
}

while(opcionSeleccionada !== Opciones.SALIR){
    opcionSeleccionada = Number(prompt("Directorio\n\n1. Nuevo contacto.\n2. Buscar contacto.\n3. Salir."));

    switch(opcionSeleccionada){
        case Opciones.NUEVO_REGISTRO:
            nuevoRegistro();
            break;
        case Opciones.BUSCAR_REGISTRO:
            buscarRegistro();
            break;
        case Opciones.SALIR:
            salir();
            break;
        default:
            accionInvalida();
    }
}