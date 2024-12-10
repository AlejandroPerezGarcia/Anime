// Función para listar los animes
const apiUrl = 'http://localhost:3001/animes'

export async function fetchAnime() {
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) {
      throw new Error("No pudimos usar el API de Anime");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAnimeById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error("No pudimos conseguir anime");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Función para agregar un nuevo anime Listo
export async function createAnime({ nombre, genero, anio, autor }) {
  try {
    const response = await fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        genero,
        anio,
        autor,
      }),
    });
    if (!response.ok) {
      throw new Error("No pudimos crear el Anime");
    }
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Función para editar un anime
export async function updateAnime(id, payload) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("No pudimos Actualizar el Anime");
    }
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Función para eliminar un anime

export async function deleteAnime(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("No pudimos Eliminar el Anime");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

//export { fetchAnime }
/*     	nombre VARCHAR,
  genero VARCHAR,
  año VARCHAR ,
  autor VARCHAR, */

/*    data-bs-toggle="modal" data-bs-target="#exampleModal" */

/* 
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')
   
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })
 */