import http from "../http-common";

class ClienteDataServicio {
    getAll() {
        return http.post("/clientes");
    }

    get(id) {
        return http.post(`/clientes/${id}`);
    }

    create(data) {
        return http.post("/clientes/create", data);
    }

    update(id, data) {
        return http.post(`/clientes/modificar/${id}`, data);
    }

    delete(id) {
        return http.post(`/clientes/borrar/${id}`);
    }
}

export default new ClienteDataServicio();