import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/to-do-model';
import { TodoService } from 'src/app/services/todo.service';
import { mockTodos } from 'src/assets/mock-to-dos';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todosData: Observable<ToDo[]>;
  loading: Observable<boolean>;
  isAddViewVisible = false;
  constructor(private toDoService: TodoService) {
    this.todosData = this.toDoService.toDoData;
    this.loading = this.toDoService.loading;
  }

  ngOnInit(): void {
    this.toDoService.getToDos();
  }

  handleAddToDoClicked(value: boolean) {
    this.isAddViewVisible = value
  }

}
