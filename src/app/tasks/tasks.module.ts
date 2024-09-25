import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list/task-list.component';

import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskTableComponent } from './tasks.component';

@NgModule({
  declarations: [
    TaskListComponent,
    // TaskTableComponent
  ],
  providers: [TaskService],
  imports: [
    CommonModule,
    
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TaskListComponent
  ]
})
export class TasksModule { }