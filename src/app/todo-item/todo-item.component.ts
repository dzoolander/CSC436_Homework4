import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() id: string;
  @Input() description: string;
  @Input() dueDate: string;

  constructor() { }

  ngOnInit() {
  }

  updateDueDate(dueDate) {
    this.dueDate = dueDate;
  }

}
