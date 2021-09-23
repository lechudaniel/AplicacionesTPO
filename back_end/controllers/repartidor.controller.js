const db = require("../models");
const Repartidores = db.repartidores;
const Op = db.Sequelize.Op;

exports.crear = (req, res) => {
    body = req.body;

    if(!body.nombre || !body.apellido || !body.telefono) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    const repartidor = {
        nombre: body.nombre,
        apellido: body.apellido,
        telefono: body.telefono
    }

    Repartidores.create(repartidor)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se creaba el repartidor."
            });
        });

};

exports.obtener_todos = (req, res) => {
    Repartidores.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error mientras se devolvian todos los repartidores."
            });
        });
};

exports.obtener_repartidor = (req, res) => {
    const id = req.params.id;

    if(!id) {
        res.status(400).send({
            message: "Error en el contenido de la request!"
        });

        return;
    }

    Repartidores.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el repartidor de la base de datos!"
            });
        });
};

exports.modificar = (req, res) => {
    const id_repartidor = req.params.id;

    Repartidores.update(req.body, {
        where: {id_repartidor: id_repartidor}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Repartidor modificado exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo modificar el repartidor!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al modificar el repartidor"
            });
        });
};

exports.borrar = (req, res) => {
    const id_repartidor = req.params.id;
    
    Repartidores.destroy({
        where: { id_repartidor: id_repartidor }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "El repartidor se borró exitosamente!"
                });
            }
            else {
                res.send({
                    message: "No se pudo borrar el repartidor!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo borrar el repartidor!"
            });
        });
};