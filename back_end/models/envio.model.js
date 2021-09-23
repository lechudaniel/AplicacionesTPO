module.exports = (sequelize, Sequelize) => {
    const Envio = sequelize.define("envios", {
        id_envio: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direccion: {
            type: Sequelize.STRING
        },
        cp: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING 
        }
    });

    return Envio;
}