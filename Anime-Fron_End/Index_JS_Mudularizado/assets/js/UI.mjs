// Actualiza la tabla con los animes
export function updateAnimeTable(animes) {
  const tableBody = document.getElementById('animeTable').getElementsByTagName('tbody')[0];

  // Limpiar las tablas
  tableBody.innerHTML = '';


  // Agregar los animes a la tabla
  animes.forEach(anime => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${anime.id}</td>
      <td>${anime.nombre}</td>
      <td>${anime.genero}</td>
      <td>${anime.anio}</td>
      <td>${anime.autor}</td>
      <td>
        <button class="btn btn-warning edit-button" data-id="${anime.id}">Editar</button>
        <button class="btn btn-danger delete-button" data-id="${anime.id}">Eliminar</button>
      </td>
    `;
  });
}

// Actualiza la tabla con los animes por id
export function updateAnimeTable2(animes) {
  const tableBody = document.getElementById('animeTable2').getElementsByTagName('tbody')[0];
  // Limpiar las tablas
  tableBody.innerHTML = '';
  // Agregar los animes a la tabla
  animes.forEach(anime => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${anime.id}</td>
      <td>${anime.nombre}</td>
      <td>${anime.genero}</td>
      <td>${anime.anio}</td>
      <td>${anime.autor}</td>      
    `;
  });
}

// Muestra los detalles del anime en la tabla de búsqueda por ID
export function showAnimeDetails(anime) {
  const tableBody2 = document.getElementById('animeTable2').getElementsByTagName('tbody')[0];
  tableBody2.innerHTML = '';  // Limpiar la tabla
  const row = tableBody2.insertRow();
  row.innerHTML = `
    <td>${anime.id}</td>
    <td>${anime.nombre}</td>
    <td>${anime.genero}</td>
    <td>${anime.anio}</td>
    <td>${anime.autor}</td>
  `;
}

// Limpia el formulario de agregar anime
export function clearForm() {
  document.getElementById('animeForm').reset();
  document.getElementById('searchId').value = '';
}

// Llena el modal de edición con los datos del anime
export function fillEditModal(anime) {
  document.getElementById('editNombre').value = anime.nombre;
  document.getElementById('editGenero').value = anime.genero;
  document.getElementById('editAnio').value = anime.anio;
  document.getElementById('editAutor').value = anime.autor;
}
