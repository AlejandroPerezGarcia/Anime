export function showAnimes(animes) {
  const tableBody = document.querySelector('#animeTable tbody');
  tableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar los nuevos datos
  animes.forEach(anime => {
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${anime.id}</td>
          <td>${anime.nombre}</td>
          <td>${anime.genero}</td>
          <td>${anime.anio}</td>
          <td>${anime.autor}</td>
          <td>
              <button class="btn btn-warning btn-sm editButton" data-id="${anime.id}" data-bs-toggle="modal" data-bs-target="#editAnimeModal" >Editar</button>
              <button class="btn btn-danger btn-sm deleteButton" data-id="${anime.id}" >Eliminar</button>
          </td>
      `;
    tableBody.appendChild(row);
  });
}

// Función para mostrar el anime encontrado por ID en la tabla
export function showAnimeById(anime) {
  const tableBody = document.querySelector('#animeTable2 tbody');
  tableBody.innerHTML = ''; // Limpiar la tabla antes de mostrar el nuevo anime
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${anime.id}</td>
      <td>${anime.nombre}</td>
      <td>${anime.genero}</td>
      <td>${anime.anio}</td>
      <td>${anime.autor}</td>      
  `;
  tableBody.appendChild(row);
}

// Función para mostrar el modal de edición
export function showEditModal(anime) {
  console.log(anime)
  document.getElementById('editNombre').value = anime.nombre;
  document.getElementById('editGenero').value = anime.genero;
  document.getElementById('editAnio').value = anime.anio;
  document.getElementById('editAutor').value = anime.autor;

  const saveButton = document.getElementById('saveChangesButton');
  saveButton.onclick = () => {
    const updatedAnimes = {
      nombre: document.getElementById('editNombre').value,
      genero: document.getElementById('editGenero').value,
      anio: document.getElementById('editAnio').value,
      autor: document.getElementById('editAutor').value
    };

    return updatedAnimes;
  };
}

