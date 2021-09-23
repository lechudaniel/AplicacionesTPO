module.exports = (sequelize, Sequelize) => {
    const Estado = sequelize.define("estados", {
        id_estado: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estado: {
            type: Sequelize.STRING
        }
    });

    return Estado;
}