const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = require("./cliente.model.js")(sequelize, Sequelize);
db.tipo_clientes = require("./tipo_cliente.model.js")(sequelize, Sequelize);
db.estados = require("./estado.model.js")(sequelize,Sequelize);
db.servicios = require("./servicio.model.js")(sequelize,Sequelize);
db.repartidores = require("./repartidor.model.js")(sequelize,Sequelize);
db.cobranzas = require("./cobranza.model.js")(sequelize,Sequelize);
db.envios = require("./envio.model.js")(sequelize,Sequelize);
db.facturas = require("./factura.model.js")(sequelize, Sequelize);

// Un cliente tiene una foreign key "id_tipo_cliente" que hace referencia a una entrada de la tabla "tipo_clientes"
db.clientes.belongsTo(db.tipo_clientes, { as: 'tipo', foreignKey: 'id_tipo_cliente'});

// Una cobranza tiene una foreign key "id_cliente" que hace referencia a un entrada de la tabla "clientes"
db.cobranzas.belongsTo(db.clientes, { as: 'cliente', foreignKey: 'id_cliente'});
//db.clientes.hasOne(db.cobranzas, { foreignKey: 'id_cliente' });

db.envios.belongsTo(db.clientes, {foreignKey: 'id_cliente', as: 'cliente'});
//db.clientes.hasOne(db.envios, { foreignKey: 'id_cliente' });
db.envios.belongsTo(db.servicios, {foreignKey: 'id_servicio', as: 'servicio'});
//db.servicios.hasOne(db.envios, { foreignKey: 'id_servicio' });
db.envios.belongsTo(db.estados, {foreignKey: 'id_estado', as: 'estado'});
//db.estados.hasOne(db.envios, { foreignKey: 'id_estado' });
db.envios.belongsTo(db.repartidores, {foreignKey: 'id_repartidor', as: 'repartidor'});
//db.estados.hasOne(db.envios, { foreignKey: 'id_estado' });

db.facturas.belongsTo(db.clientes, {foreignKey: 'id_cliente', as: 'cliente'});

module.exports = db;