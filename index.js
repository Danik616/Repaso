console.clear()
import {createServer} from 'http';

const httpServer= createServer((req, res)=> {
    //console.log(req.method)
    //console.log(req.url)
    //console.log(req.headers)
    console.log("PETICION RECIBIDA")

    let data='';
    let chunkIndex=0
    req.on('data', (chunk) =>{
        data +=chunk
        chunkIndex++
        console.log(chunkIndex)
    })
    req.on('end', () => {
        res.end('Recibido')
    })

    
})

httpServer.listen(3000)