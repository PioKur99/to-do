import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerTitle: string = 'Do zrobienia'
  buttonText: string = 'Dodaj'
  showAddView: boolean = false;

  handleAddClick() {
    this.showAddView = !this.showAddView;
    this.buttonText = this.showAddView ? 'Anuluj' : 'Dodaj'
  }

}
