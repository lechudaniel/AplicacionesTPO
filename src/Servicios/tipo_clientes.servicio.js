import http from "../http-common";

class TipoClientesDataServicio {
    getAll() {
        return http.post("/tipo_clientes");
    }

    get(id) {
        return http.post(`/tipo_clientes/${id}`);
    }

}

export default new TipoClientesDataServicio();