import mongoose from 'mongoose';
import 'dotenv/config'

//define the database connection string
const DB_CONNECTION = process.env.CLOUD_DB

//connects to a MongoDB database using the provided connection string
async function connect() {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
}

//returns the connection object of the mongoose database.
function getDatabase() {
  return mongoose.connection;
}

export { connect, getDatabase };