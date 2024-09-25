import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskItem } from './task-item.dto';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

}
@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  constructor() { }

  @Input()
  tasks: TaskItem[] = [];

  @Output()
  onRemove = new EventEmitter<TaskItem>();

  ngOnInit(): void {
  }

  remove(taskItem: TaskItem) {
    this.onRemove.next(taskItem);
  }

}

