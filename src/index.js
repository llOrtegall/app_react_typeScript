// TODO: Encargado de iniciar todos los servicios
import app from './App.js'
import { connectDB } from './db.js'

connectDB();
app.listen(3000);
console.log('Server listening on port 3000')