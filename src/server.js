import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { connect } from './database.js';
import routes from './imports/routes.imports.js'

//define the port of the server
const PORT = process.env.PORT || 5000
const app = express()


//enable cors funtionalities of the server
app.use(cors())
//allows the server to handle JSON data sent in the request body
app.use(express.json())

// start database connection
connect()

/*define the endpoints for the routes 
The code `routes.forEach((route) => { app.use(route) })` is iterating over an array of route
handlers and registering them with the Express app using the `app.use()` method. */
routes.forEach((route) => {
  app.use(route)
})

//starting the Node.js server and listening for incoming requests on the specified port
app.listen(PORT,() => {
  console.log(`Server up on: http://localhost:${PORT}`)
})