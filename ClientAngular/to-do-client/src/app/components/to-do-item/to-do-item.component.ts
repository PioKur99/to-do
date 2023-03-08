import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize, first } from 'rxjs';
import { Alert } from 'src/app/models/alert-content-model';
import { ToDo } from 'src/app/models/to-do-model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() toDo!: ToDo;
  @Output() itemModified: EventEmitter<Alert> = new EventEmitter<Alert>();

  deleteLoading = false;
  updateLoading = false;

  constructor(private toDoService: TodoService) { }


  handleCheckBoxClick(value: boolean, id: string | undefined) {
    if(id) {
      this.updateLoading = true;
      this.toDoService.updateToDo(id, value).pipe(first(), finalize(() => this.updateLoading = false)).subscribe(
        next => {
          const alert: Alert = {type: 'success', message: 'Dane zostały zapisane.'}
          this.itemModified.emit(alert);
          this.toDoService.getToDos();
        },
        error => {
          const alert: Alert = {type: 'danger', message: 'Wystąpił błąd!'}
          this.itemModified.emit(alert);
        }
      )
    }
  }

  handleDelete(id: string | undefined) {
    if(id) {
      this.deleteLoading = true;
      this.toDoService.deleteToDo(id).pipe(first(), finalize(() => this.deleteLoading = false)).subscribe(
        next => {
          const alert: Alert = {type: 'alert alert-success', message: 'Dane zostały zapisane.'}
          this.itemModified.emit(alert);
          this.toDoService.getToDos();
        },
        error => {
          const alert: Alert = {type: 'alert alert-danger', message: 'Wystąpił błąd!'}
          this.itemModified.emit(alert);
        }
      )
    }
  }

}
