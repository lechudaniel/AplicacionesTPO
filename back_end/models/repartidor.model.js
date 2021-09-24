module.exports = (sequelize, Sequelize) => {
    const Repartidor = sequelize.define("repartidores", {
        id_repartidor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellido: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        }
    });

    return Repartidor;
}