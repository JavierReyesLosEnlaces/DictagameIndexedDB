NOTAS DE NODE.JS E INDEXEDDB:    
- Node.js se ejecuta en el lado del servidor
- IndexedDB es una API se ejecuta en el lado del cliente sin conexión, en el navegador web
- Para este caso me interesa probar con IndexedDB

FUNCIONES DISPONIBLES POR CONSOLA:
- crearTablaUsuarios();
- insertarUsuario(nombre(string), edad(int));       -> insertarUsuario("Javier Reyes", 28);
- consultarUsuarios();
- borrarTablaUsuarios();                            -> Borra la tabla entera, no solo sus registros

DISCLAIMERS: 
- He intentado implementarlo con sqlite pero me ha dado demasiados problemas, así que he usado IndexedDB que me ha puesto las cosas mucho más fáciles a la hora de trabajar en local
- El código es un poco chapucero, no hay control de excepciones, pero el propósito de esto era ser capaz de conectarme a una base de datos y así lo he hecho. A partir de aquí el código se puede modificar para darle un uso más funcional con el "Dictagame", como un histórico de los resultados de los jugadores.


