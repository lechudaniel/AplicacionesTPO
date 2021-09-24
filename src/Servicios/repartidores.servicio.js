import http from "../http-common";

class RepartidoresDataService {
    getAll() {
        return http.post("/repartidores");
    }

    get(id) {
        return http.post(`/repartidores/${id}`);
    }

    crear(data) {
        return http.post("/repartidores/crear", data);
    }

    modificar(id, data) {
        return http.post(`/repartidores/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/repartidores/borrar/${id}`);
    }
}

export default new RepartidoresDataService();