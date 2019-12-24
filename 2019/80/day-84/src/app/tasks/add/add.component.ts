import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService, Task } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  @ViewChild('taskForm', {static: true})

  taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
    this.task = new Task();
  }

  add(): void {
    if (this.taskForm.form.valid) {
      this.taskService.add(this.task);
      this.router.navigate(['/tarefas']);
    }
  }
}
