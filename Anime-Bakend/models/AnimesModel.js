/**
 * Importamos el "Conector a BD"
 */
import { query } from "../config/index.js"
import { AnimesRouter } from "../routes/AnimesRoutes.js"

const Anime = {}

Anime.getAll = async () => {
  let text = 'SELECT id, nombre, genero, anio, autor FROM animes ORDER BY id'
  let params = []
  const result = await query(text, params)
  return result
}

Anime.create = async (data) => {
  let text = 'INSERT INTO animes (nombre, genero, anio, autor) VALUES ($1, $2, $3, $4) RETURNING id, nombre, genero, anio, autor'
  let params = [data.nombre, data.genero, data.anio, data.autor]
  const result = await query(text, params)
  return result
}

Anime.find = async (id, nombre) => {
  if (id) {
    let text = 'SELECT id, nombre, genero, anio, autor FROM animes WHERE id = $1'
    let params = [id]
    const result = await query(text, params)
    return result
  } else {
    let text = 'SELECT id, nombre, genero, anio, autor FROM animes WHERE nombre = $1'
    let params = [nombre]
    const result = await query(text, params)
    return result
  }
}

Anime.update = async (id, data) => {
  let campos = []
  let params = []
  let index = 1

  for (let key in data) {
    campos.push(`${key} = $${index}`)
    params.push(data[key])
    index++
  }
  params.push(id)

  if (campos.length == 0) {
    throw new Error('No hay datos para actualizar')
  }

  let text = `UPDATE animes SET ${campos.join(', ')} WHERE id = $${index}`

  const result = await query(text, params)
  return result.rows
}

Anime.delete = async (id) => {
  const text = 'DELETE FROM animes WHERE id = $1'
  const params = [id]
  const result = await query(text, params)
  return result
}

export { Anime }