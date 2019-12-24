import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TaskService, CompletedDirective } from './shared';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    CompletedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule { }
