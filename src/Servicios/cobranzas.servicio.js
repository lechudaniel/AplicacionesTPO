import http from "../http-common";

class CobranzasDataService {
    getAll() {
        return http.post("/cobranzas");
    }

    get(id) {
        return http.post(`/cobranzas/${id}`);
    }

    crear(data) {
        return http.post("/cobranzas/crear", data);
    }

    modificar(id, data) {
        return http.post(`/cobranzas/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/cobranzas/borrar/${id}`);
    }
}

export default new CobranzasDataService();