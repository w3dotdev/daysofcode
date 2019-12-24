import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task, TaskService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  @ViewChild('taskForm', { static: true })

  taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.task = this.taskService.searchId(id);
  }

  update(): void {
    if (this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tarefas']);
    }
  }
}
