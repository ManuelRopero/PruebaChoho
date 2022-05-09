# PruebaChoho
Prueba tecnica choho  
Descripcion:  
Se realiza la prueba tecnica propuesta, como lengujaes de programacion se uso para el backend node.js y para el frontend React.js  
para crear e insetard datos en la base de datos se uso mySql.  
  
Pasos para ejecutar el proyecto: 
1) Clonar el repositorio de git hub en una capeta git clone https://github.com/ManuelRopero/PruebaChoho.git  
2) En mySql ejecutar el script ScriptCrearTablas.txt que se encuentra dentro del proyecto  (Copiar el contenido del txt y ejecutarlo en un script de mySql)
3) En mySql ejecutar el script ScriptLlenarDB.txt que se encuentra dentro del proyecto  
4) Abrir el proyecto en visual studio code ir a la siguiente direccion \backend\src\database\config\config.js y editar el username y el password  
5) en la terminal entrar a la carpeta backend y ejecutar npm install  
6) Cuando termine la instalacon en la terminal ejecutar npm start para correr el backend del proyecto  
7) En la terminal ir a la carpeta frontend y ejecutar npm install 
8) Cuando termine la instalacion dentro de la terminal ejecutar npm start, esto debe cargar la web del proyecto
9) Podra ver una tabla con el nombre de asesores y botones para realizar una consulta, los asesores son los que se insertaron en la DB  
  
Los endpoints para consumir la api son:  
http://localhost:3001/api/asesor/allAsesor Para consultar informacion de todos los asesores  
http://localhost:3001/api/asesor/allproducts Para consultar todos los productos  
http://localhost:3001/api/asesor/${id} Para consultar toda la informacion referente a un asesor, ${id} corresponde al id del asesor del que se desea traer informacion
