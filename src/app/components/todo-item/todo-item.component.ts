import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todomodel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() //rende possibile che vengano passati i file dentro il dom
  todo?: Todo; //con ? possiamo inserire una proprieta' tipo Todo vuota
}
