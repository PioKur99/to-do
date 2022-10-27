import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do-model';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() toDo!: ToDo;

  constructor() { }

  ngOnInit(): void {
  }

  handleCheckBoxClick(value: boolean) {
    console.log(value);
  }

}
