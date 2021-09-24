module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("clientes", {
        id_cliente: {
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
        mail: {
            type: Sequelize.STRING 
        },
        telefono: {
            type: Sequelize.STRING
        },
        ciudad: {
            type: Sequelize.STRING
        },
        pais: {
            type: Sequelize.STRING
        },
        provincia: {
            type: Sequelize.STRING
        },
        cp: {
            type: Sequelize.STRING
        }
    });

    return Cliente;
}