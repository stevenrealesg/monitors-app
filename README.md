# monitors-app
Este repositorio consta de dos directorios, backend y frontend, llamados `api` y `frontend` respectivamente.

## Instalación
1. Ubica este repositorio donde lo desees instalar.
2. En tu máquina, crea una base de datos MySQL, con el nombre que prefieras.
3. En la raíz de este repositorio encontrarás un archivo llamado `university.sql`, importa ese archivo en la base de datos.
4. Ingresa al directorio `./api` y ejecuta `npm install`.
5. Ingresa al directorio `./frontend` y ejecuta `npm install`.

## Configuración de entorno
### Backend
Dentro del directorio `./api` encontrarás un archivo `.env` con los siguientes parámetros:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=university

SECRET_WORD=secrettagencrypt
PORT=3001
```
- Las primeras variables comenzadas por `DB...` corresponden a la conexión a la base de datos, por lo que estos valores dependen de la configuración de tu máquina.

- La variable `PORT` corresponde al puerto donde se va estar ejecutando el servidor, si no se agrega, este tomará por defecto el valor de `3000`.

- La variable `SECRET_WORD` corresponde a la palabra secreta para encriptar el token

### Frontend
Dentro del directorio `./frontend` encontrarás un archivo `.env` con los siguientes parámetros:

```
REACT_APP_URL_API=http://localhost:3001
PORT=4000
```
- La variable `REACT_APP_URL_API` corresponde a la URL donde se está ejecutando el servidor. Si no se agrega, este tomará el valor por defecto de `http://localhost:3000`.

- La variable `PORT` corresponde al puerto donde se va estar ejecutando el cliente, si no se agrega, este tomará por defecto el valor de `5000`.

## Despliegue
De forma paralela ejecutar `npm start` en el directorio `./api` y en el directorio `./frontend`. Siendo más específico, abre dos terminales, ubícate en cada uno de estos directorios y ejecuta el comando.