import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../models/to-do-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>("http://localhost:8080/todo");
  }
}
