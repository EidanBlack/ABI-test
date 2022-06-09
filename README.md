A webpage application where you can create, list and eliminate products using an API. Made with HTML, CSS, JavaScript for frontend and NodeJS for the backend.

Página web que consiste en un menú con tres opciones (crear producto, listar tus productos y eliminarlos). La interfaz está hecha con puro HTML, CSS y JavaScript. El backend de la página está corriendo en un servidor NodeJS con express que está escuchando el puerto 5500 si se corre de forma local, tomando el valor que se le pase en el archivo .env (PATH=5500?). Si no cuenta con este archivo tomará el path configurado por el sistema operativo.

![image](https://user-images.githubusercontent.com/89209603/172845283-c44e0254-c7c3-4d24-a7d3-e0625db78ca7.png)

Para abrir la página y que todo funcione correctamente, debe clonar el repositorio a su máquina local, asegurarse de crear el archivo .env así como está en el archivo de ejemplo .env-example, y asignarle las variables PATH=<puerto de escucha> y TOKEN = <tu clave de autorización para la API de ABi>. A continuación abrir la consola o terminal y ejecutar "node ./dist/app.js" para poner el servidor en funcionamiento. Por último abrir el navegador e ir a la dirección https://localhost:<tuPuerto>. 
  
Página de creación de producto --> ![image](https://user-images.githubusercontent.com/89209603/172846118-9f88515b-8f72-4cfa-8040-d98c4a7c8e1c.png)
Página de listado de productos --> ![image](https://user-images.githubusercontent.com/89209603/172846246-bc17855d-73fb-491f-83c4-158a3b524c30.png)
Página para borrar producto --> ![image](https://user-images.githubusercontent.com/89209603/172846307-01bd7c00-54ae-43de-be8d-cdd1a0e87a1e.png)

A la página le faltan algunos detalles, como control y validación de algunos formularios, las alertas no están personalizadas, entre algunos otros detalles de la interfaz. El punto de la página web era aprender a consumir la api de ABi, tanto el método get como el post y el delete, para obtener datos, cargarlos y borrarlos. También me ha servido para aprender el backend de las aplicaciones web, a montar un servidor y a realizar peticiones y respuestas entre el frontend y el backend. 
  
 Made by Adrian Candia
 Asunción - Paraguay
 Linkedin: https://www.linkedin.com/in/adrian-candia-82729a219/
