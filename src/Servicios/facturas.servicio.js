import http from "../http-common";

class FacturasDataService {
    getAll() {
        return http.post("/facturas");
    }

    get(id) {
        return http.post(`/facturas/${id}`);
    }

    crear(data) {
        return http.post("/facturas/crear", data);
    }

    modificar(id, data) {
        return http.post(`/facturas/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/facturas/borrar/${id}`);
    }
}

export default new FacturasDataService();