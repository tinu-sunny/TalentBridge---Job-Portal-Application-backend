// import json server

const jsonserver = require('json-server')

// create server using json

const server = jsonserver.create()

// create of middleware

const middleware = jsonserver.defaults()

// router setup

const router = jsonserver.router('db.json')

// implement use 

server.use(middleware)
server.use(router)

// port creation 

const port =3000
// start server 
server.listen(port,()=>{
    console.log("Server is runing on the port ",port);
    
})