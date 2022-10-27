import { Component, EventEmitter, Output } from '@angular/core';
import { first } from 'rxjs';
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

  constructor(private toDoService: TodoService) {}

  onSubmit() {
    if (!this.text || !this.dueDate) {
      this._showAlert('Proszę uzupełnić wszystkie pola!', 'alert alert-danger');
    } else {
      const newToDo: ToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.toDoService.createToDo(newToDo).pipe(first()).subscribe(() => {
        this._showAlert('Dane zostały zapisane.', 'alert alert-success', newToDo)
        this.toDoService.getToDos();
      })
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
