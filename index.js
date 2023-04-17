// PAra intentar operar en CJS o MJS haremos lo siqguiente

import {suma} from "./operaciones.cjs"

//Si nosotros queremos usar CommonJS y usar un require para llamar a el objeto JSON
//hacemos lo siguiente
import { createRequire } from "module"
const require= createRequire(import.meta.url)
const users= require('./users.json')

console.log(users)
console.log(suma(2,3))