import { fetchAnime, fetchAnimeById, createAnime, updateAnime, deleteAnime } from './consumoApi.mjs';
import { updateAnimeTable, showAnimeDetails, clearForm, fillEditModal, updateAnimeTable2 } from './UI.mjs';

// Cargar la lista de animes cuando la página se cargue
window.onload = () => {
  loadAnimes();
};

// Función para cargar todos los animes y mostrarlos en la tabla
async function loadAnimes() {
  const animes = await fetchAnime();
  updateAnimeTable(animes);
}

// Buscar anime por ID
document.getElementById('searchButton').addEventListener('click', async () => {
  const searchId = document.getElementById('searchId').value;
  if (searchId) {
    const anime = await fetchAnimeById(searchId);
    updateAnimeTable2([anime]);  // Muestra solo el anime encontrado
  } else {
    alert('Por favor, ingresa un ID válido.');
  }
});

// Agregar un nuevo anime
document.getElementById('animeForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const genero = document.getElementById('genero').value;
  const anio = document.getElementById('anio').value;
  const autor = document.getElementById('autor').value;

  const newAnime = await createAnime({ nombre, genero, anio, autor });

  if (newAnime) {
    alert('Anime agregado con éxito');
    loadAnimes();  // Recarga la lista de animes
    clearForm();   // Limpia el formulario
  }
});

// Editar anime
let currentAnimeId = null;

document.getElementById('saveChangesButton').addEventListener('click', async () => {
  const nombre = document.getElementById('editNombre').value;
  const genero = document.getElementById('editGenero').value;
  const anio = document.getElementById('editAnio').value;
  const autor = document.getElementById('editAutor').value;

  if (currentAnimeId) {
    const updatedAnime = await updateAnime(currentAnimeId, { nombre, genero, anio, autor });
    if (updatedAnime) {
      alert('Anime actualizado con éxito');
      loadAnimes();  // Recarga la lista de animes
      currentAnimeId = null; // Restablece el ID
      clearForm();   // Limpia el formulario
      const editModal = bootstrap.Modal.getInstance(document.getElementById('editAnimeModal'));
      editModal.hide();  // Cierra el modal
    }
  }
});

// Eliminar anime
function deleteAnimeById(id) {
  if (confirm('¿Estás seguro de que deseas eliminar este anime?')) {
    deleteAnime(id).then(() => {
      alert('Anime eliminado con éxito');
      loadAnimes();  // Recarga la lista de animes
    });
  }
}

// Función para manejar el clic en el botón de editar (en la tabla)
document.getElementById('animeTable').addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('edit-button')) {
    const animeId = e.target.dataset.id;
    openEditModal(animeId);
  }

  if (e.target && e.target.classList.contains('delete-button')) {
    const animeId = e.target.dataset.id;
    deleteAnimeById(animeId);
  }
});

// Abre el modal de edición y llena el formulario con los datos del anime
async function openEditModal(id) {
  currentAnimeId = id;
  const anime = await fetchAnimeById(id);
  fillEditModal(anime);

  // Usamos Bootstrap Modal API para abrir el modal
  const editModal = new bootstrap.Modal(document.getElementById('editAnimeModal'));
  editModal.show();  // Abre el modal
}
