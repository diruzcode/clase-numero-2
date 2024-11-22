const http =  require('http');  

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end('Hola mundo')
})


server.listen(3000, () => {
    console.log("Ya me estoy ejecutando")
})