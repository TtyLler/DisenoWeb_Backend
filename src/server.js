import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { connect } from './database.js';
import restaurante from './routes/restaurante.js'
import bebida from './routes/bebida.js'
import consecutivo from './routes/consecutivo.js'
import equipo from './routes/equipo.js'
import tecnologia from './routes/tecnologia.js'
import caja from './routes/caja.js'
import cargoEmpleado from './routes/cargoempleado.js'
import cliente from './routes/cliente.js'
import comestible from './routes/comestible.js'
import empleado from './routes/empleado.js'
import especial from './routes/especial.js'
import limpieza from './routes/limpieza.js'
import marca from './routes/marca.js'
import medida from './routes/medida.js'
import mesa from './routes/mesa.js'
import pais from './routes/pais.js'
import platillo from './routes/platillo.js'
import producto from './routes/producto.js'
import proveedor from './routes/proveedor.js'
import rol from './routes/rol.js'
import transaccion from './routes/transaccion.js'
import usuario from './routes/usuario.js'

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
app.use(equipo)
app.use(tecnologia)
app.use(caja)
app.use(cargoEmpleado)
app.use(cliente)
app.use(comestible)
app.use(empleado)
app.use(especial)
app.use(limpieza)
app.use(marca)
app.use(medida)
app.use(mesa)
app.use(pais)
app.use(platillo)
app.use(producto)
app.use(proveedor)
app.use(rol)
app.use(transaccion)
app.use(usuario)

//starting the Node.js server and listening for incoming requests on the specified port
app.listen(PORT,() => {
  console.log(`Server up on: http://localhost:${PORT}`)
})