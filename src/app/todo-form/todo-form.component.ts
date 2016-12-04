import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() createTodo = new EventEmitter();

  newTodo = "";

  constructor() { }

  ngOnInit() {
  }

  onCreateTodo() {
    if(this.newTodo !== "") this.createTodo.next(this.newTodo);
    this.newTodo = "";
  }
}
