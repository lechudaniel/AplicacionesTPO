import http from "../http-common";

class EnvioDataService {
    getAll() {
        return http.post("/envios");
    }

    get(id) {
        return http.post(`/envios/${id}`);
    }

    crear(data) {
        return http.post("/envios/crear", data);
    }

    modificar(id, data) {
        return http.post(`/envios/modificar/${id}`, data);
    }

    borrar(id) {
        return http.post(`/envios/borrar/${id}`);
    }
}

export default new EnvioDataService();