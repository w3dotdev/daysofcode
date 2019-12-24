import { Injectable } from '@angular/core';
import { Task } from './';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor() { }

  list(): Task[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  add(task: Task): void {
    const tasks = this.list();
    task.id = new Date().getTime();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  searchId(id: number): Task {
    const tasks: Task[] = this.list();
    return tasks.find(task => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.list();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  remove(id: number): void {
    let tasks: Task[] = this.list();
    tasks = tasks.filter(task => task.id !== id);
    localStorage.tasks = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    const tasks: Task[] = this.list();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].completed = !obj.completed;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
