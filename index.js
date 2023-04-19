console.clear()
import express from 'express'
import dotenv from 'dotenv'
import accountRouter from './routes/account.js';
import authRouter from './routes/auth.js';
import cookieParser from 'cookie-parser';
import authSessionRouter from './routes/auth_session.js'
import authTokenRouter from './routes/auth_token.js'


dotenv.config();

const PORT=process.env.PORT
const expressApp= express();

expressApp.use(cookieParser())
expressApp.use(express.json())
expressApp.use(express.text())
expressApp.use("/account", accountRouter)
expressApp.use("/auth", authRouter)
expressApp.use("/auth-token", authTokenRouter)
expressApp.use("/auth-session", authSessionRouter)

expressApp.listen(PORT, ()=> console.log(`Servidor levantado en el puerto: ${PORT}`))


//Estos dos metodos en los que usamos json y text estan hechos para que el sistema pueda 
//leer solo en esas dos entradas.

 