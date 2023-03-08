import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, first, Observable } from 'rxjs';
import { ToDo } from '../models/to-do-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient) { }

  loadToDos() {
    return this.http.get<ToDo[]>("http://localhost:8080/todo");
  }

  createToDo(data: ToDo) {
    return this.http.post("http://localhost:8080/todo", data);
  }

  deleteToDo(id: string) {
    return this.http.delete(`http://localhost:8080/todo/${id}`);
  }

  updateToDo(id: string, value: boolean) {
    return this.http.put(`http://localhost:8080/todo/${id}`, {}, {params: {done: value}});
  }

}
