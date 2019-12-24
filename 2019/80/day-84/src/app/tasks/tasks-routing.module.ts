import { Routes } from '@angular/router';

import { ListComponent } from './list';
import { AddComponent } from './add';
import { EditComponent } from './edit';

export const TasksRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListComponent
  },
  {
    path: 'tarefas/adicionar',
    component: AddComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditComponent
  }
];
