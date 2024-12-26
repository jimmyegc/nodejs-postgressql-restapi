import express from 'express' 
import morgan from 'morgan' 
import { PORT } from './config.js'
import usersRoutes from './routes/users.routes.js'

const app = express() 

app.use(morgan("dev"))
app.use(express.json())
app.use(usersRoutes)
app.listen(PORT)

console.log(`Sever is running on http://localhost:${PORT}`)