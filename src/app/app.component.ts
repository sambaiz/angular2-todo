import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  todos_: string[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
                       todos => this.todos_ = todos.map((t) => t["todo"]),
                       error => this.todos_ = ["<error>"]);
  }

  onCreateTodo(todo: string) {
    this.todoService.addTodo(todo).subscribe(
                       todo => this.todos_.push(todo["todo"]),
                       error => this.todos_ = ["<error>"]);
  }
}
