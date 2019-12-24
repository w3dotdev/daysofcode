import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.list();
  }

  list(): Task[] {
    return this.taskService.list();
  }

  remove($event: any, task: Task): void {
    $event.preventDefault();

    this.taskService.remove(task.id)
    this.tasks = this.taskService.list();
  }

  changeStatus(task: Task): void {
    this.taskService.changeStatus(task.id);
    this.tasks = this.taskService.list();
  }

}
