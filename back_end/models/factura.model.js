module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define("facturas", {
        id_factura: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        año: {
            type: Sequelize.STRING
        },
        mes: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.STRING
        }
    });

    return Factura;
}