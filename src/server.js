import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { connect } from './database.js';
import restaurante from './routes/restaurante.js'
import bebida from './routes/bebida.js'
import consecutivo from './routes/consecutivo.js'

//define the port of the server
const PORT = process.env.PORT || 5000
const app = express()


//enable cors funtionalities of the server
app.use(cors())
//allows the server to handle JSON data sent in the request body
app.use(express.json())

// start database connection
connect()

// define the endpoints for the routes
app.use(restaurante)
app.use(bebida)
app.use(consecutivo)

//starting the Node.js server and listening for incoming requests on the specified port
app.listen(PORT,() => {
  console.log(`Server up on: http://localhost:${PORT}`)
})