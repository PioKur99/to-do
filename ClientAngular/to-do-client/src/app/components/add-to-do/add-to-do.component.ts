import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/models/to-do-model';

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

  onSubmit() {
    if (!this.text || !this.dueDate) {
      this.alertMessage = 'Proszę uzupełnić wszystkie pola!'
      this.alertType = 'alert alert-danger'
      this.showAlert = true;
      setTimeout(() => this.showAlert = false, 2000);
    } else {
      const newToDo: ToDo = {
        text: this.text,
        dueDate: this.dueDate
      };
      this.alertMessage = 'Dane zostały zapisane.'
      this.alertType = 'alert alert-success'
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
        this.onAddToDo.emit(newToDo);
        this.text = '';
        this.dueDate = '';
      }, 2000);
    }
  }

}
