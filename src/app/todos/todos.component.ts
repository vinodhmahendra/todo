import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Structure for Todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})


export class TodosComponent {
  todos : Todo[] = [];
  newTodo = '';
  filter = 'all'; // all , active ,completed

  constructor(private router: Router) {}

  addTodo(): void {
    if (this.newTodo.trim()) {
      const todo : Todo = {
        id: Date.now(),
        title: this.newTodo.trim(),
        completed: false,
        createdAt: new Date()
      };
      this.todos.push(todo);
      this.newTodo = '';
    }
  }
}
