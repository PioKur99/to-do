import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() addClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() itemAdded: EventEmitter<void> = new EventEmitter<void>();
  headerTitle: string = 'Do zrobienia'
  buttonText: string = 'Dodaj'
  showAddView: boolean = false;

  handleAddClick() {
    this.showAddView = !this.showAddView;
    this.buttonText = this.showAddView ? 'Anuluj' : 'Dodaj'
    this.addClicked.emit();
  }

  handleItemAdded() {
    this.itemAdded.emit();
  }
}

