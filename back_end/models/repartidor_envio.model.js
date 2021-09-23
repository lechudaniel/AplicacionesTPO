module.exports = (sequelize, Sequelize) => {
    const RepartidorEnvio = sequelize.define("repartidor_envios", {
        id_repartidor_envio: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    return RepartidorEnvio;
}