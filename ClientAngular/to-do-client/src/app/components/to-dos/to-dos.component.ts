import { Component, OnInit } from '@angular/core';
import { finalize, first} from 'rxjs';
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

  handleAddToDoClicked() {
    this.isAddViewVisible = !this.isAddViewVisible;
  }

  onItemModified(success: boolean) {
    if(success) {
      this.alertService.open('success', 'Dane zostały zapisane.');
      this.fetchData();
    } else {
        this.alertService.open('danger', 'Wystąpił błąd!');
      }
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
