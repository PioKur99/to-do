import axios from 'axios';
export default class TodoService {
    API_URL = "http://localhost:8080/todo"

    loadToDos() {
        return axios.get(this.API_URL);
    }

    createToDo(data) {
        return axios.post(this.API_URL, data);
    }
    
    deleteToDo(id) {
        return axios.delete(this.API_URL + `/${id}`);
    }
    
    updateToDo(id, value) {
        return axios.put(this.API_URL + `/${id}`, {}, {params: {done: value}});
    }

    populateData(count) {
        return axios.get(this.API_URL + `/populate/${count}`);
    }
}