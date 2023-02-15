const express = require('express')
const bodyParser  = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
require ('dotenv').config()
const port = process.env.PORT||3005
//Conexión a base de datosnpm
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
/*
PORT=4000

DB_USER=cursonode
DB_PASSWORD=8fNCez6Emijrr3tk
DB_NAME=dbformula1
*/
//para que nadie vea directamente nuestras credenciales
const uri= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ccdnevu.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))
//motor de plantilla
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs')

//middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:

app.use('/', require('./router/rutas'));
app.use('/circuito', require('./router/circuito'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
