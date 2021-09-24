module.exports = (sequelize, Sequelize) => {
    const Cobranza = sequelize.define("cobranzas", {
        id_cobranza: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        monto: {
            type: Sequelize.STRING
        },
        fecha_emision: {
            type: Sequelize.STRING 
        },
        forma_de_pago: {
            type: Sequelize.STRING
        }
    });

    return Cobranza;
}