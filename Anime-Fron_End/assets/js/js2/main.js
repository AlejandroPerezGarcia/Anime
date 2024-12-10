import { createAnime, deleteAnime, fetchAnime, fetchAnimeById, updateAnime } from '../consumoApi.mjs'
import { showAnimes, showAnimeById, showEditModal } from './UI.mjs';

fetchAnime()
  .then(animes => showAnimes(animes)
  )

/* fetchAnimeById(3)
  .then(respuesta => {
    let Anime = respuesta
    console.log(Anime)
  }) */

// Función para buscar un anime por ID
document.getElementById('searchButton').addEventListener('click', () => {
  const searchId = document.getElementById('searchId').value;
  if (!searchId) {
    alert('Por favor ingrese un ID');
    return;
  }

  fetchAnimeById(searchId)
    .then(anime => showAnimeById(anime))
    .catch(error => alert(error.message));
});

/*  
createAnime("Dragon Ball Z", "Pelea", 1998, "Javier")
 .then(respuesta => {
   let Anime = respuesta
   console.log(Anime)
 }) */

// Función para agregar un nuevo anime Listo
document.getElementById('animeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newAnime = {
    nombre: document.getElementById('nombre').value,
    genero: document.getElementById('genero').value,
    anio: document.getElementById('anio').value,
    autor: document.getElementById('autor').value
  };

  createAnime(newAnime)
    .then(() => {
      alert('Anime agregado');
      fetchAnime(); // Recargar la lista de animes
      document.getElementById('animeForm').reset(); // Limpiar el formulario
    });
});


/* updateAnime(5, { nombre: "Pokemon 1000000000" })
 .then(respuesta => {
   let Anime = respuesta
   console.log(Anime)
 }) */


// Función para editar un anime
document.getElementById('saveChangesButton').addEventListener('click', () => {
  const updatedAnime = showEditModal();
  const id = document.getElementById('editId').value; // Id del anime a editar

  updateAnime(id, updatedAnime)
    .then(() => {
      alert('Anime actualizado');
      fetchAnime(); // Recargar la lista
      const modal = new bootstrap.Modal(document.getElementById('editAnimeModal'));
      modal.hide(); // Cerrar el modal
    });
});

// Función para eliminar un anime
document.querySelectorAll('.deleteButton').forEach(button => {
  button.addEventListener('click', (e) => {
    const animeId = e.target.dataset.id;
    deleteAnime(animeId)
      .then(() => {
        alert('Anime eliminado');
        fetchAnime(); // Recargar la lista de animes
      });
  });
});

/*



deleteAnime(10)
 .then(respuesta => {
   let Anime = respuesta
   console.log(Anime)
 })
*/

fetchAnime()