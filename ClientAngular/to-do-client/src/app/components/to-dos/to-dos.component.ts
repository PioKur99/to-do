import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/alert-content-model';
import { ToDo } from 'src/app/models/to-do-model';
import { AlertService } from 'src/app/services/alert.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todosData: Observable<ToDo[]>;
  loading: Observable<boolean>;
  isAddViewVisible = false;
  constructor(private toDoService: TodoService, private alertService: AlertService) {
    this.todosData = this.toDoService.toDoData;
    this.loading = this.toDoService.loading;
  }

  ngOnInit(): void {
    this.toDoService.getToDos();
  }

  handleAddToDoClicked(value: boolean) {
    this.isAddViewVisible = value
  }

  displayAlert(alert: Alert) {
    this.alertService.open(alert.type, alert.message);
  }

}
