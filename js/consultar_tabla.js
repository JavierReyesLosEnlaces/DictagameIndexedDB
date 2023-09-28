// Función para consultar la tabla "USUARIOS"
function consultarUsuarios() {
  var z = window.indexedDB.open('mi_base_de_datos', 1);

  z.onsuccess = function (event) {
    var db = event.target.result;
    var transaccion = db.transaction('usuarios', 'readonly'); //transacción de lectura
    var objectStore = transaccion.objectStore('usuarios');
    //referencia al almacén de objetos 'usuarios' dentro de la transacción. El almacén de objetos es donde se almacenan los datos.

    var usuarios = []; //array para almacenar usuarios

    objectStore.openCursor().onsuccess = function (event) { //recorrido por los registros
      var cursor = event.target.result;
      if (cursor) {
        usuarios.push(cursor.value);
        cursor.continue();
      } else {
        console.log("Usuarios en la base de datos:", usuarios);
        db.close();
      }
    };
  };
}


