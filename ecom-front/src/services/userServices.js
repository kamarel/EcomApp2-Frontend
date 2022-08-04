import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/users');
}

const create = data => {
    return httpClient.post("/users", data);
}

const get = id => {
    return httpClient.get(`/users/${id}`);
}

const update = data => {
    return httpClient.put('/users', data);
}

const remove = id => {
    return httpClient.delete(`/users/${id}`);
}


export default { getAll, create, get, update, remove };
