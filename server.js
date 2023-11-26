/*
Iniciar postgres:
initdb -U postgres -A password -E utf8 -W -D "C:\BD\DATA"
pg_ctl -D "C:\BD\DATA" -l "C:\BD\LOG\log.txt" start
psql -U postgres

Para crear, rellenar la base de datos y ejecutar el servidor: 
en caso de no tener sequelize: npm install sequelize-cli -g

npx sequelize db:create
npx sequelize db:migrate
npx sequelize-cli db:seed:all
npm run dev

Para borrar base de datos en caso haya error:
DROP DATABASE proyectopw1;

Detener postgres:
pg_ctl stop -D "C:\BD\DATA" -m smart

Exportar base de datos:
pg_dump -U postgres proyectopw1 > proyectopw1.pgsql

Importar base de datos:
psql -U postgres proyectopw1 < proyectopw1.pgqsl
*/
const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

// require
const prueba = require('./api/prueba')
const personas = require('./api/personas')
const libros = require('./api/libros')
const reservas = require('./api/reservas')
// -----

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json({limit: '50mb'}));

// use
app.use('/api/prueba',prueba)
app.use('/api/personas',personas)
app.use('/api/libros',libros)
app.use('/api/reservas',reservas)
//-----

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});
