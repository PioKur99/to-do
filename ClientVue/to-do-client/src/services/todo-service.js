import axios from 'axios';
export default class TodoService {

    loadToDos() {
        return axios.get("http://localhost:8080/todo");
    }

    createToDo(data) {
        return axios.post("http://localhost:8080/todo", data);
    }
    
    deleteToDo(id) {
        return axios.delete(`http://localhost:8080/todo/${id}`);
    }
    
    updateToDo(id, value) {
        return axios.put(`http://localhost:8080/todo/${id}`, {}, {params: {done: value}});
    }
}