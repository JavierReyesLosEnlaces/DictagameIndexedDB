// Función para borrar la tabla "USUARIOS"
function borrarTablaUsuarios() {
  var request = window.indexedDB.open('mi_base_de_datos', 1);

  request.onsuccess = function (event) {
    var db = event.target.result;

    // Iniciar una transacción de escritura en la base de datos
    var transaction = db.transaction(['usuarios'], 'readwrite');

    // Obtener el almacén de objetos de la transacción
    var objectStore = transaction.objectStore('usuarios');

    // Borrar la tabla de usuarios
    var deleteRequest = objectStore.clear();


    deleteRequest.onsuccess = function () {
      console.log("Tabla 'usuarios' borrada con éxito.");
    };


    // se completa la transacción y se cierra
    transaction.oncomplete = function () {
      db.close();
    };
  };
};




