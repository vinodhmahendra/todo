import { Component } from '@angular/core';
import { DefaultTitleStrategy, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule, FormsModule],
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

  toggleTodo(id: number): void{
    const todo = this.todos.find(t => t.id  === id);
    if ( todo ) {
      todo.completed = !todo.completed;
    }
  }

  get filteredTodos() : Todo[] {
    switch( this.filter ) {
      case 'active' : return this.todos.filter(t => !t.completed);
      case 'completed': return this.todos.filter(t => t.completed);
      default: return this.todos;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  get todoStats() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const active = total -completed;
    return { total, completed, active };
  }

  goBack() : void {
    this.router.navigate(['/welcome','admin'])
  }
} 
