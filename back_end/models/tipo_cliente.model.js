module.exports = (sequelize, Sequelize) => {
    const TipoCliente = sequelize.define("tipo_clientes", {
        id_tipo_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_cliente: {
            type: Sequelize.STRING
        }
    });

    return TipoCliente;
}