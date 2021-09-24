import http from "../http-common";

class ClientesDataService {
    getAll() {
        return http.post("/clientes");
    }

    get(id) {
        return http.post(`/clientes/${id}`);
    }

    crear(data) {
        return http.post("/clientes/crear", data);
    }

    modificar(id, data) {
        return http.post(`/clientes/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/clientes/borrar/${id}`);
    }
}

export default new ClientesDataService();