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

//motor de plantilla
app.set('views',__dirname + '/views');
app.set('view engine' ,'ejs')

//middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:

app.use('/', require('./router/rutas'));

app.use((req, res) => {
  res.status(404).render("404", {
      titulo: "404",
      descripcion: "Titulo del sitio web"
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})