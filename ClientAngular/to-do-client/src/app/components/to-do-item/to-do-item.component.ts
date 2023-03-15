import { Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize, first } from 'rxjs';
import { ToDo } from 'src/app/models/to-do-model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() toDo!: ToDo;
  @Input() index!: number;
  @Output() itemModified: EventEmitter<boolean> = new EventEmitter<boolean>();

  deleteLoading = false;
  updateLoading = false;

  constructor(private toDoService: TodoService) { }


  handleCheckBoxClick(value: boolean, id: string | undefined) {
    if(id) {
      this.updateLoading = true;
      this.toDoService.updateToDo(id, value).pipe(
        first(), 
        finalize(() => this.updateLoading = false)).subscribe({
        next: () => {
          this.itemModified.emit(true);
        },
        error: () => {
          this.itemModified.emit(false);
        }
      })
    }
  }

  handleDelete(id: string | undefined) {
    if(id) {
      this.deleteLoading = true;
      this.toDoService.deleteToDo(id).pipe(
        first(), 
        finalize(() => this.deleteLoading = false)).subscribe({
        next: () => {
          this.itemModified.emit(true);
        },
        error: () => {
          this.itemModified.emit(false);
        }
      })
    }
  }
}
