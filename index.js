console.clear()
import express from 'express';

const PORT=3000
const expressApp= express();

expressApp.listen(PORT, ()=> console.log(`Servidor levantado en el puerto: ${PORT}`))


//Estos dos metodos en los que usamos json y text estan hechos para que el sistema pueda 
//leer solo en esas dos entradas.
expressApp.use(express.json())
expressApp.use(express.text())

expressApp.post("/cuenta", (req,res)=> {
    console.log(req.body)
    console.log(req.query)
    res.send("Tu cuenta personal")
})

expressApp.put("/producto", (req,res)=> {
    console.log(req.body)

    res.send()
    
})
