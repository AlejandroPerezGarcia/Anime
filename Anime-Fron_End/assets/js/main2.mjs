// Aquí empieza el JavaScript para el CRUD

const apiUrl = 'http://localhost:3001/animes'; // Cambia esta URL por tu API real

// Función para listar los animes
function listAnimes() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector('#animeTable tbody');
      tableBody.innerHTML = '';
      data.forEach(anime => {
        const row = document.createElement('tr');
        row.innerHTML = `
                            <td>${anime.id}</td>
                            <td>${anime.nombre}</td>
                            <td>${anime.genero}</td>
                            <td>${anime.anio}</td>
                            <td>${anime.autor}</td>
                            <td>
                                <button class="btn btn-warning btn-sm editButton" data-id="${anime.id}">Editar</button>
                                <button class="btn btn-danger btn-sm deleteButton" data-id="${anime.id}">Eliminar</button>
                            </td>
                        `;
        tableBody.appendChild(row);
      });

      // Agregar los eventos de editar y eliminar
      document.querySelectorAll('.editButton').forEach(button => {
        button.addEventListener('click', (e) => {
          const animeId = e.target.dataset.id;
          editAnime(animeId);
        });
      });
      document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (e) => {
          const animeId = e.target.dataset.id;
          deleteAnime(animeId);
        });
      });
    });
}

// Función para buscar un anime por ID
document.getElementById('searchButton').addEventListener('click', () => {
  const searchId = document.getElementById('searchId').value;
  if (!searchId) {
    alert('Por favor ingrese un ID');
    return;
  }

  fetch(`${apiUrl}/${searchId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Anime no encontrado');
      }
      return response.json();
    })
    .then(data => {
      const tableBody = document.querySelector('#animeTable2 tbody');
      tableBody.innerHTML = ''; // Limpiar la tabla
      const row = document.createElement('tr');
      row.innerHTML = `
                        <td>${data.id}</td>
                        <td>${data.nombre}</td>
                        <td>${data.genero}</td>
                        <td>${data.anio}</td>
                        <td>${data.autor}</td>
                    `;
      tableBody.appendChild(row);
    })
    .catch(error => {
      alert(error.message);
    });
});

// Función para agregar un nuevo anime
document.getElementById('animeForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const newAnime = {
    nombre: document.getElementById('nombre').value,
    genero: document.getElementById('genero').value,
    anio: document.getElementById('anio').value,
    autor: document.getElementById('autor').value
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnime)
  })
    .then(response => response.json())
    .then(() => {
      alert('Anime agregado');
      listAnimes(); // Recargar la lista de animes
      document.getElementById('animeForm').reset(); // Limpiar el formulario
    });
});

// Función para editar un anime
function editAnime(id) {
  fetch(`${apiUrl}/${id}`)
    .then(response => response.json())
    .then(anime => {
      document.getElementById('editNombre').value = anime.nombre;
      document.getElementById('editGenero').value = anime.genero;
      document.getElementById('editAnio').value = anime.anio;
      document.getElementById('editAutor').value = anime.autor;

      // Mostrar el modal de edición
      const saveButton = document.getElementById('saveChangesButton');
      saveButton.onclick = () => {
        const updatedAnime = {
          nombre: document.getElementById('editNombre').value,
          genero: document.getElementById('editGenero').value,
          anio: document.getElementById('editAnio').value,
          autor: document.getElementById('editAutor').value
        };

        fetch(`${apiUrl}/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedAnime)
        })
          .then(() => {
            alert('Anime actualizado');
            listAnimes(); // Recargar la lista
            new bootstrap.Modal(document.getElementById('editAnimeModal')).hide(); // Cerrar el modal
          });
      };

      // Mostrar el modal
      new bootstrap.Modal(document.getElementById('editAnimeModal')).show();
    });
}

// Función para eliminar un anime
function deleteAnime(id) {
  if (confirm('¿Estás seguro de eliminar este anime?')) {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        alert('Anime eliminado');
        listAnimes(); // Recargar la lista de animes
      });
  }
}

// Cargar la lista de animes al inicio
listAnimes();