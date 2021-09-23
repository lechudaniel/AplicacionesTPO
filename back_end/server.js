const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
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
require("./routes/repartidor_envios.routes.js")(app);

// seteamos el puerto y nos quedamos esperando a que llegen requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});