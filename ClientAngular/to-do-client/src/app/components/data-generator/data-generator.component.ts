import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent {
  @Input() loading!: boolean
  @Output() populateClicked: EventEmitter<number> = new EventEmitter<number>();
  populateCount: number = 0;

  generateClicked() {
    this.populateClicked.emit(this.populateCount);
  }
}
