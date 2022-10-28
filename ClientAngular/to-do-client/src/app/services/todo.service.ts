import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, first, Observable } from 'rxjs';
import { ToDo } from '../models/to-do-model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDoData: BehaviorSubject<ToDo[]> = new BehaviorSubject<ToDo[]>([]);
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  createLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  deleteLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAlertShown: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient) { }

  getToDos() {
    this.loading.next(true);
    this.http.get<ToDo[]>("http://localhost:8080/todo").pipe(
      first(), 
      finalize(() => {this.loading.next(false)})
      ).subscribe((response) => {
      this.toDoData.next(response);
    });
  }

  createToDo(data: ToDo) {
    return this.http.post("http://localhost:8080/todo", data)
  }

  deleteToDo(id: string) {
    return this.http.delete(`http://localhost:8080/todo/${id}`)
  }

  updateToDo(id: string, value: boolean) {
    return this.http.put(`http://localhost:8080/todo/${id}`, {}, {params: {done: value}});
  }

  noticeAlertShow() {
    this.isAlertShown.next(true);
    setTimeout(() => this.isAlertShown.next(false), 2000);
  }
}
