const db = require("../models");
const Estados = db.estados;
const Op = db.Sequelize.Op;

exports.crear = (req, res) => {
    body = req.body;

    if(!body.estado) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const estado = {
        estado: body.estado,
    }

    Estados.create(estado)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el estado."
            });
        });

};

exports.obtener_todos = (req, res) => {
    Estados.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los estados."
            });
        });
};

exports.obtener_estado = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Estados.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el estado de la base de datos!"
            });
        });
};

exports.modificar = (req, res) => {
    const id_estado = req.params.id;

    Estados.update(req.body, {
        where: {id_estado: id_estado}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Estado modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el estado!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el estado"
            });
        });
};

exports.borrar = (req, res) => {
    const id_estado = req.params.id;
    
    Estados.destroy({
        where: { id_estado: id_estado }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El estado se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el estado!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el estado!"
            });
        });
};