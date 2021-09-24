const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    db.tipo_clientes.create({ tipo_cliente: "Persona Fisica"});
    db.tipo_clientes.create({ tipo_cliente: "Persona Juridica"});

    db.estados.create({estado:"En espera"});
    db.estados.create({estado:"En camino"});
    db.estados.create({estado:"Entregado"});

    db.servicios.create({servicio:"Express", tamaño:"Carta", velocidad:"Prioritario"});
    db.servicios.create({servicio:"Normal", tamaño:"Paquete hasta 3KG", velocidad:"Normal"});
    db.servicios.create({servicio:"Economico", tamaño:"Paquete hasta 1KG", velocidad:"Sin prioridad"});

    db.clientes.create({nombre: "Julian", apellido:"Ramirez", mail:"julian_ramirez87@gmail.com", telefono:"1234-1234", ciudad:"CABA", pais:"Argentina",provincia:"Buenos Aires", cp:"1234", "id_tipo_cliente":1});
    db.clientes.create({nombre: "Maria", apellido:"Gonzalez", mail:"maria_gonzalez@gmail.com", telefono:"1234-1234", ciudad:"CABA", pais:"Argentina",provincia:"Buenos Aires", cp:"1234", "id_tipo_cliente":1});
    db.clientes.create({nombre: "Hernan", apellido:"Lopez", mail:"hernanlopez95@gmail.com", telefono:"1234-1234", ciudad:"CABA", pais:"Argentina",provincia:"Buenos Aires", cp:"1234", "id_tipo_cliente":1});

    db.repartidores.create({nombre: "Juan", apellido:"Lopez", mail:"juanlopez95@gmail.com", dni:"123456", direccion:"calle falsa 123", telefono:"1234-1234", ciudad:"CABA", pais:"Argentina",provincia:"Buenos Aires", cp:"1234"});
    db.repartidores.create({nombre: "Laura", apellido:"Gonzalez", mail:"lauragonzalez@gmail.com", dni:"123456", direccion:"calle falsa 123", telefono:"1234-1234", ciudad:"CABA", pais:"Argentina",provincia:"Buenos Aires", cp:"1234"});

    db.envios.create({id_servicio: "2", direccion: "calle falsa 123", cp: "1234", id_cliente: "1", ciudad: "CABA", id_estado: "3", id_repartidor: "2"});
    db.envios.create({id_servicio: "1", direccion: "calle falsa 234", cp: "1234", id_cliente: "2", ciudad: "CABA", id_estado: "1", id_repartidor: "2"});

    db.cobranzas.create({monto:"200", fecha_emision:"20/05/2021", forma_de_pago:"Tarjeta de Credito", id_cliente:"1"});
    db.cobranzas.create({monto:"300", fecha_emision:"26/05/2021", forma_de_pago:"Tarjeta de Debito", id_cliente:"2"});

    db.facturas.create({monto:"200", año:"2021", mes:"05", id_cliente:"1"});
    db.facturas.create({monto:"300", año:"2021", mes:"05", id_cliente:"2"});
});

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parsea requests que tengan "content-type" igual a "application/json"
app.use(bodyParser.json());

// parsea request que tengan "content-type" igual a "application/x-www-form-urlencoded"
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.json({ message: "Este es el back end"});
});

// Incluimos las rutas disponibles
require("./routes/clientes.routes.js")(app);
require("./routes/tipo_clientes.routes.js")(app);
require("./routes/estados.routes.js")(app);
require("./routes/servicios.routes.js")(app);
require("./routes/repartidores.routes.js")(app);
require("./routes/cobranzas.routes.js")(app);
require("./routes/envios.routes.js")(app);
require("./routes/facturas.routes.js")(app);

// seteamos el puerto y nos quedamos esperando a que llegen requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});