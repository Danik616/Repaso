import { Router } from "express"
import userModel from "../schemas/user-schema.js"
//para hacer la conexión con la base de datos de mongodb
//se debe hacer la instlacion de mongoose. npm i -E mongoose

const accountRouter = Router()

//Middleware que loguea la ip
accountRouter.use((req, res, next) => {
    next()
})

//Obtener los detalles de la cuenta
accountRouter.get('/:guid', async (req, res) => {
    const {guid} = req.params;
    const user = await userModel.findById(guid).exec()
    
    if(!user){
        return res.status(404).send()
    } 

    return res.send(user)
})
//Crear una nueva cuenta
accountRouter.post('/', async (req, res) => {
    
    const {guid, name} =req.body;
    
    if(!name || !guid) return res.state(400).send()

    const user = await userModel.findById(guid).exec()

    if(user) return res.status(409).send("El usuario ya se encuentra regitrado")

    const newUser= new userModel({_id:guid, name})
    await newUser.save()

    return res.send("Usuario registrado")

})
//Actualizar una cuenta
accountRouter.patch('/:guid', async (req, res) => {

    const {guid} = req.params;
    const {name} =req.body;
    const user = await userModel.findById(guid).exec()
    
    if(!name) return res.state(400).send()
    if(!user) return res.status(404).send()

    user.name= name

    await user.save()

    return res.send()
    
})
//Eliminar una cuenta
accountRouter.delete('/:guid', async (req, res) => {

    const {guid} = req.params;
    const user = await userModel.findByIdAndRemove(guid).exec()
    
    if(!user){
        return res.status(404).send()
    } 

    return res.send()
})

export default accountRouter