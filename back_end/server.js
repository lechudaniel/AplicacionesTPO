const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    db.tipo_clientes.create({ tipo_cliente: "Persona Fisica"});
    db.tipo_clientes.create({ tipo_cliente: "Persona Juridica"});
    db.tipo_clientes.create({ tipo_cliente: "Persona Prueba"});

    db.estados.create({estado:"En espera"});
    db.estados.create({estado:"En camino"});
    db.estados.create({estado:"Entregado"});

    db.servicios.create({servicio:"Express", tamaño:"Carta", velocidad:"Prioritario"});
    db.servicios.create({servicio:"Normal", tamaño:"Paquete hasta 3KG", velocidad:"Normal"});
    db.servicios.create({servicio:"Economico", tamaño:"Paquete hasta 1KG", velocidad:"Sin prioridad"});
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