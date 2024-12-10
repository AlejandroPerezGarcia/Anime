import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { AnimesRouter } from './routes/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
/**
 * Middlewares
 */
app.use(bodyParser.json())
/**
 * Rutas
 */
app.use("/animes", AnimesRouter)
/**
 * Levantamos Servidor
 */
app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
})

/**
 * Resciliencia
 */
process.on('uncaughtException', (err) => {
  console.log(err)
})
