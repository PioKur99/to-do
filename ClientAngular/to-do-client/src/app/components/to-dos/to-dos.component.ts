import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'src/app/models/alert-content-model';
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
  isAddAlertVisible: Observable<boolean>;
  isAddViewVisible = false;
  alertMessage: string = '';
  alertType: string = ''
  showAlert: boolean = false;
  constructor(private toDoService: TodoService) {
    this.todosData = this.toDoService.toDoData;
    this.loading = this.toDoService.loading;
    this.isAddAlertVisible = this.toDoService.isAlertShown;
  }

  ngOnInit(): void {
    this.toDoService.getToDos();
  }

  handleAddToDoClicked(value: boolean) {
    this.isAddViewVisible = value
  }

  displayAlert(alert: Alert) {
    this.alertMessage = alert.message;
    this.alertType = alert.type;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false
    }, 2000);
  }

}
