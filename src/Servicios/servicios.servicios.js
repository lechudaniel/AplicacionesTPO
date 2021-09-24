import http from "../http-common";

class ServiciosDataService {
    getAll() {
        return http.post("/servicios");
    }

    get(id) {
        return http.post(`/servicios/${id}`);
    }

    crear(data) {
        return http.post("/servicios/crear", data);
    }

    modificar(id, data) {
        return http.post(`/servicios/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/servicios/borrar/${id}`);
    }
}

export default new ServiciosDataService();