import { Component, Output, EventEmitter } from '@angular/core';
import { finalize, first } from 'rxjs';
import { ToDo } from 'src/app/models/to-do-model';
import { AlertService } from 'src/app/services/alert.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  @Output() itemAdded: EventEmitter<void> = new EventEmitter<void>();
  text: string = '';
  dueDate: string = '';
  loading = false;

  constructor(private toDoService: TodoService, private alertService: AlertService) {}

  onSubmit() {
    if (!this.text || !this.dueDate) {
      this.alertService.open('danger', 'Proszę uzupełnić wszystkie pola!');
    } else {
      this.loading = true;
      const newToDo: ToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.toDoService.createToDo(newToDo).pipe(
        first(), 
        finalize(() => this.loading = false)
        ).subscribe({
        next: () => {
          this.alertService.open('success', 'Dane zostały zapisane.');
          this.itemAdded.emit();
        },
        error: () => {
          this.alertService.open('danger', 'Wystąpił błąd!');
        }
      })
    }
  }
}
