//Si nosotros queremos manejar de CJS a MJS toca hacer imports dinamicos
import('./operaciones.mjs').then(({suma}) => console.log(suma(2,3)))