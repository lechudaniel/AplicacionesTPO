module.exports = (sequelize, Sequelize) => {
    const Cobranza = sequelize.define("cobranzas", {
        id_cobranza: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nro_transaccion: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.STRING
        },
        fecha_emision: {
            type: Sequelize.STRING 
        }
    });

    return Cobranza;
}