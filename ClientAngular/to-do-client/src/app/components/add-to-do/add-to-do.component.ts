import { Component } from '@angular/core';
import { finalize, first, Observable } from 'rxjs';
import { ToDo } from 'src/app/models/to-do-model';
import { AlertService } from 'src/app/services/alert.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  text: string = '';
  dueDate: string = '';
  loading: Observable<boolean>;

  constructor(private toDoService: TodoService, private alertService: AlertService) {
    this.loading = this.toDoService.createLoading;
  }

  onSubmit() {
    if (!this.text || !this.dueDate) {
      this.alertService.open('danger', 'Proszę uzupełnić wszystkie pola!');
    } else {
      this.toDoService.createLoading.next(true);
      const newToDo: ToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.toDoService.createToDo(newToDo).pipe(
        first(), 
        finalize(() => this.toDoService.createLoading.next(false))
        ).subscribe({
        next: () => {
          this.alertService.open('success', 'Dane zostały zapisane.');
          this.toDoService.getToDos();
        },
        error: () => {
          this.alertService.open('danger', 'Wystąpił błąd!');
        }
      })
    }
  }
}
