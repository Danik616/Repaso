import { Type } from "@sinclair/typebox"
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import Ajv from "ajv"

const loginDTOSchema=Type.Object({
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'El tipo debe ser un String',
            format: 'Email debe contener un correo electronico valido'
        }
    }),
    password: Type.String({
        errorMessage: {
            type: "El tipo de password debe de ser un String"
        }
    }),
},
{
    additionalProperties: false
})
//se instala npm i ajv para la validacion del schema
//se instala npm install @sinclair/typebox
const ajv=new Ajv({allErrors: true})
addFormats(ajv, ['email']).addKeyword("kind").addKeyword("modifier")
addErrors(ajv)

const validate = ajv.compile(loginDTOSchema)


const validateLoginDTO= (req, res, next) =>{
    const isDTOValid = validate(req.body)
    // en una prueba anterior salia un error y es porque se me habia olvidado poner el return del if
    // siempre en http si vamos a enviar un error por medio de un condicional hay que poner el return
    if(!isDTOValid) return res.status(400).send(ajv.errorsText(validate.errors, {separator: "\n"}))
    
    next()
}

export default validateLoginDTO