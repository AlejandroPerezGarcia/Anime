# conexion a DB

## Definición de bd

```sql
CREATE DATABASE data_anime;
```

```sql
\c data_anime
```

```sql
CREATE TABLE animes(
	nombre VARCHAR,
	genero VARCHAR,
	año VARCHAR ,
	autor VARCHAR,
	id SERIAL PRIMARY KEY
);
```
