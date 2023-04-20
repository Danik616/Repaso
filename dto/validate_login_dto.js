const DTO_PROPERTIES_NAMES=["email", "password"]
//se instala npm i ajv para la validacion del schema
//se instala npm install @sinclair/typebox
const loginDTOSchema= {
    type: 'object',
    properties: {
        email: {type: 'string', format: 'email'},
        password: {type: 'string'}
    },
    required: ['email', 'password'],
    additionalProperties: false
}

const validateLoginDTO= (req, res, next) =>{
    const loginDto= req.body
     if(typeof loginDto !== 'object') res.status(400).send("El body tiene que venir en formato JSON")
     const bodyPropertiesNames = Object.keys(loginDto)

     const checkProperties = 
     bodyPropertiesNames.length === DTO_PROPERTIES_NAMES.length && 
     bodyPropertiesNames.every(bodyPropertiesName => 
        DTO_PROPERTIES_NAMES.includes(bodyPropertiesName))

    if(!checkProperties) res.status(400).send("El body debe de contener unicamente email y password")
}

export default validateLoginDTO