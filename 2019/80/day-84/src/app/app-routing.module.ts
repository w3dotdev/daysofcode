import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksRoutes } from './tasks';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TasksRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
