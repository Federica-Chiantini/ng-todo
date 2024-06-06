import { Component } from '@angular/core';
import { Todo } from '../../models/todomodel';
import { TODOS } from '../../data/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
    todos: Todo[] = TODOS; //tipo Todo preso da models, [] significa che e' un array, TODOS elenco con i dati
}
