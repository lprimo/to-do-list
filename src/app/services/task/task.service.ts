import { Injectable } from '@angular/core';
import { DataTable } from '../../models/data-table.model';
import { DATA_SOURCE } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  initTask(): void {
    const dataSource: DataTable[] = [
      { position: 1, task: 'Task exemplo', status: false },
      { position: 2, task: 'Task exemplo => status concluído', status: true }
    ]
    localStorage.setItem(DATA_SOURCE, JSON.stringify(dataSource))
  }

  getList(): DataTable[] {
    return JSON.parse(localStorage.getItem(DATA_SOURCE) || '');
  }

  updateList(dataSource: DataTable[]): void {
    localStorage.setItem(DATA_SOURCE, JSON.stringify(dataSource))
  }
}
