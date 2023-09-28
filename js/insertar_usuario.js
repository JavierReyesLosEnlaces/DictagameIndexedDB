// Función para insertar usuario en la tabla "USUARIOS"
function insertarUsuario(nombre, edad) {

  //abrir o crear una base de datos en IndexedDB
  var y = window.indexedDB.open('mi_base_de_datos', 1);

  //si no hay problemas
  y.onsuccess = function (event) {    //ESTA FUNCIÓN NO LA ENTIENDO -_-
    var db = event.target.result; //una referencia a la base de datos que hemos abierto o creado

    var transaction = db.transaction(['usuarios'], 'readwrite');//transacción de escritura

    // Obtener el almacén de objetos de la transacción
    var objectStore = transaction.objectStore('usuarios');

    // Crear un objeto que represente el nuevo usuario
    var nuevoUsuario = {
      nombre: nombre,
      edad: edad
    };

    // agregamos el nuevo usuario a la tabla de usuarios y vemos los escenarios posibles
    var agregarRequest = objectStore.add(nuevoUsuario);


    agregarRequest.onsuccess = function () {
      console.log("Usuario insertado con éxito.");
    };


  };
}