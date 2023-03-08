import { Component, OnInit } from '@angular/core';
import { finalize, first, Observable } from 'rxjs';
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
  data: ToDo[] = [];
  loading = true;
  isAddViewVisible = false;
  constructor(private toDoService: TodoService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  handleAddToDoClicked(value: boolean) {
    this.isAddViewVisible = value
  }

  displayAlert(alert: Alert) {
    this.alertService.open(alert.type, alert.message);
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    this.toDoService.loadToDos().pipe(
      first(),
      finalize(() => this.loading = false)
      ).subscribe(response => {
        this.data = response;
    })
  }
}
