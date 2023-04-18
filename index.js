console.clear()
import express from 'express';

const PORT=3000
const expressApp= express();

expressApp.listen(PORT, ()=> console.log(`Servidor levantado en el puerto: ${PORT}`))


//Estos dos metodos en los que usamos json y text estan hechos para que el sistema pueda 
//leer solo en esas dos entradas.
expressApp.use(express.json())
expressApp.use(express.text())

expressApp.get("/cuenta", (req,res)=> {
    
    res.send("Tu cuenta personal")
})

expressApp.get("/cuenta/:idcuenta", (req,res)=> {
    console.log(req.params.idcuenta)
    console.log(req.body)

    res.send()
    
})
