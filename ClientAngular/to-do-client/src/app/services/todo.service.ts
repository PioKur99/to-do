import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, first, Observable } from 'rxjs';
import { ToDo } from '../models/to-do-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API_URL: string = "http://localhost:8080/todo"
  
  constructor(private http: HttpClient) { }

  loadToDos() {
    return this.http.get<ToDo[]>(this.API_URL);
  }

  createToDo(data: ToDo) {
    return this.http.post(this.API_URL, data);
  }

  deleteToDo(id: string) {
    return this.http.delete(this.API_URL + `/${id}`);
  }

  updateToDo(id: string, value: boolean) {
    return this.http.put(this.API_URL + `/${id}`, {}, {params: {done: value}});
  }

  populateData(count: number) {
    return this.http.get<ToDo[]>(this.API_URL + `/populate/${count}`);
  }

}
