module.exports = (sequelize, Sequelize) => {
    const Servicio = sequelize.define("servicios", {
        id_servicio: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        servicio: {
            type: Sequelize.STRING
        },
        tamaño: {
            type: Sequelize.STRING
        },
        velocidad: {
            type: Sequelize.STRING
        }
    });

    return Servicio;
}