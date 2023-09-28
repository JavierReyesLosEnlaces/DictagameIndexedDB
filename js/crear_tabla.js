//Función para crear la tabla "USUARIOS"
function crearTablaUsuarios() {
  // abrir o crear una base de datos en IndexedDB
  var request = window.indexedDB.open('mi_base_de_datos', 1);

  // cuando se abre la base de datos por primera vez o cambia la versión
  request.onupgradeneeded = function (event) {
    var db = event.target.result; // una referencia a la base de datos que hemos abierto o creado
    var objectStore = db.createObjectStore('usuarios', { keyPath: 'id', autoIncrement: true });

    // se definen los campos de la tabla, si no es la primera vez, no se crea desde el principio
    objectStore.createIndex('nombre', 'nombre', { unique: false });
    objectStore.createIndex('edad', 'edad', { unique: false });
  };

  // si no hay problemas
  request.onsuccess = function (event) {
    var db = event.target.result;
    console.log("Tabla 'USUARIOS' creada");
  };
}

