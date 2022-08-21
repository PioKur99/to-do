import { Component, OnInit } from '@angular/core';
import { ToDo } from './models/to-do-model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading = false;
  todos: ToDo[] = []
  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.toDoService.getToDos().subscribe(data => {
      this.todos = data;
      this.loading = false;
    })
  }
}
