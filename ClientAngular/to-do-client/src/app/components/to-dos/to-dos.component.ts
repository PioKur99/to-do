import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do-model';
import { TodoService } from 'src/app/services/todo.service';
import { mockTodos } from 'src/assets/mock-to-dos';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todosData: ToDo[] = [];
  isAddViewVisible = false;
  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    /*this.toDoService.getToDos().subscribe((response) => {
      this.todos = response;
    })*/
    this.todosData = mockTodos;
  }

  handleAddToDoClicked(value: boolean) {
    this.isAddViewVisible = value
  }

}
