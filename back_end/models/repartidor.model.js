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
        },
        dni: {
            type: Sequelize.STRING
        },
        provincia: {
            type: Sequelize.STRING
        },
        cp: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        }
    });

    return Repartidor;
}