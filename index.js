console.clear()
import express from 'express';

const PORT=3000
const expressApp= express();

expressApp.listen(PORT, ()=> console.log(`Servidor levantado en el puerto: ${PORT}`))

expressApp.get("/cuenta", (req,res)=> {
    
    res.send("Tu cuenta personal")
})

expressApp.get("/cuenta/:idcuenta", (req,res)=> {
    console.log(req.params.idcuenta)
    //nosotros podemos enviarle status code si lo necesitamos
    //como en este caso que le enviamos 401 porque no esta autorizado
    res.status(401).send({
        errorMessage: 'No autorizado'
    })
    
})
