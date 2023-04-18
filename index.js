console.clear()
import express from 'express';

const PORT=3000
const expressApp= express();

expressApp.listen(PORT, ()=> console.log(`Servidor levantado en el puerto: ${PORT}`))


//Estos dos metodos en los que usamos json y text estan hechos para que el sistema pueda 
//leer solo en esas dos entradas.
expressApp.use(express.json())
expressApp.use(express.text())

//Obtener los detalles de la cuenta


//Crear una nueva cuenta

//Actualizar una cuenta

//Eliminar una cuenta
