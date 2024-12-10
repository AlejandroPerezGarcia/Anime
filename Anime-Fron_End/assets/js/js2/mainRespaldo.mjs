import { createAnime, deleteAnime, fetchAnime, fetchAnimeById, updateAnime } from '../consumoApi.mjs'

fetchAnime()
  .then(respuesta => {
    let arregloPromesasAnime = respuesta
    console.log(arregloPromesasAnime)
  })

fetchAnimeById(3)
  .then(respuesta => {
    let Anime = respuesta
    console.log(Anime)
  })

createAnime("Dragon Ball Z", "Pelea", 1998, "Javier")
  .then(respuesta => {
    let Anime = respuesta
    console.log(Anime)
  })

updateAnime(5, { nombre: "Pokemon 1000000000" })
  .then(respuesta => {
    let Anime = respuesta
    console.log(Anime)
  })

deleteAnime(10)
  .then(respuesta => {
    let Anime = respuesta
    console.log(Anime)
  })
