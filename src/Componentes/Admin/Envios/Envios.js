import repartidores from '../Repartidores/dataRepart'
import clientes from '../Clientes/dataClientes'


let envios = [{
    id: 1,
    servicio: "Premium",
    direccion: "David Magdalena 4435",
    ciudad: "Caseros",
    codPostal: "1678",
    repartidor: repartidores[0].apellido,
    estado: "Entregado",
    cliente: clientes[0].apellido
},{
    id: 2,
    servicio: "Express",
    direccion: "Av Libertador 50001",
    ciudad: "Vicente Lopez",
    codPostal: "2005",
    repartidor: repartidores[1].apellido,
    estado: "En proceso",
    cliente: clientes[1].nombre,

},{
    id: 1,
    servicio: "Normal",
    direccion: "San Martin 2355",
    codPostal: "6785",
    ciduad: "Capital Federal",
    repartidor: repartidores[1].apellido,
    estado: "Error (404)",
    cliente: clientes[0].apellido,
}]

export default envios;