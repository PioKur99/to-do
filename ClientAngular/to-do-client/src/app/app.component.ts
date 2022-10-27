import { Component, OnInit } from '@angular/core';
import { mockTodos } from 'src/assets/mock-to-dos';
import { ToDo } from './models/to-do-model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
