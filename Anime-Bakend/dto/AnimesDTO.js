import Joi from "joi"

/**
 * nombre , genero,año,autor
 * Representa el anime enviado por el cliente
 */

const id = Joi.number().integer().messages({
  "number.base": "El ID debe ser un número.",
  "number.integer": "El ID debe ser un número entero.",
})

const nombre = Joi.string().min(3).max(40).pattern(/^[a-zA-Z0-9\s]+$/).messages({
  "string.pattern.base": "El nombre solo puede contener caracteres alfanuméricos y espacios.",
  "string.min": "El nombre debe tener al menos 3 caracteres.",
  "string.max": "El nombre no puede exceder los 40 caracteres.",
  "string.base": "El nombre debe ser un texto.",
});

const genero = Joi.string().min(3).max(30).pattern(/^[a-zA-Z0-9\s]+$/).messages({
  "string.pattern.base": "El genero solo puede contener caracteres alfanuméricos y espacios.",
  "string.alphanum": "El genero solo puede contener caracteres alfanuméricos.",
  "string.min": "El genero debe tener al menos 3 caracteres.",
  "string.max": "El genero no puede exceder los 30 caracteres.",
  "string.base": "El genero debe ser un texto.",
})

const anio = Joi.number().integer().messages({
  "number.base": "El anio debe ser un número.",
  "number.integer": "El anio debe ser un número entero.",
})

const autor = Joi.string().min(3).max(40).pattern(/^[a-zA-Z0-9\s]+$/).messages({
  "string.pattern.base": "El autor solo puede contener caracteres alfanuméricos y espacios.",
  "string.min": "El autor debe tener al menos 3 caracteres.",
  "string.max": "El autor no puede exceder los 30 caracteres.",
  "string.base": "El autor debe ser un texto.",
})

export const createAnimeSchema = Joi.object({
  nombre: nombre
    .required()
    .messages({ "any.required": "El nombre es obligatorio." }),
  genero: genero
    .required()
    .messages({ "any.required": "El genero es obligatorio." }),
  anio: anio
    .required()
    .messages({ "any.required": "El anio es obligatorio." }),
  autor: autor
    .required()
    .messages({ "any.required": "El autor es obligatorio." })
})

export const UpdateAnimeShema = Joi.object({
  id: id.required(),
  nombre: nombre.optional(),
  genero: genero.optional(),
  anio: anio.optional(),
  autor: autor.optional(),
})
  .min(1)
  .message({
    "object.min":
      "Debes proporcionar al menos un campo: nombre,genero,anio o autor"
  })