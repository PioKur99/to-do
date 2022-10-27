import { Component, EventEmitter, Output } from '@angular/core';
import { finalize, first, Observable } from 'rxjs';
import { ToDo } from 'src/app/models/to-do-model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  @Output() onAddToDo: EventEmitter<ToDo> = new EventEmitter();
  text: string = '';
  dueDate: string = '';
  alertMessage: string = '';
  alertType: string = ''
  showAlert: boolean = false;
  loading: Observable<boolean>;

  constructor(private toDoService: TodoService) {
    this.loading = this.toDoService.createLoading;
  }

  onSubmit() {
    if (!this.text || !this.dueDate) {
      this._showAlert('Proszę uzupełnić wszystkie pola!', 'alert alert-danger');
    } else {
      this.toDoService.createLoading.next(true);
      const newToDo: ToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.toDoService.createToDo(newToDo).pipe(
        first(), 
        finalize(() => this.toDoService.createLoading.next(false))
        ).subscribe(
        next => {
          this._showAlert('Dane zostały zapisane.', 'alert alert-success', newToDo);
          this.toDoService.getToDos();
        },
        error => {
          this._showAlert('Wystąpił błąd!', 'alert alert-danger');
        }
      )
    }
  }

  private _showAlert(message: string, type: string, toDo?: ToDo) {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false
      if(toDo) {
        this.onAddToDo.emit(toDo);
        this.text = '';
        this.dueDate = '';
      }
    }, 2000);
  }

}
