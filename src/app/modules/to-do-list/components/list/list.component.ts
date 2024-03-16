import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { DataTable } from '../../../../models/data-table.model';
import { TaskService } from '../../../../services/task/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnChanges, OnInit {

  @Input() taskGerada: string = '';
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = ['position', 'task', 'status', 'action'];
  dataSource: DataTable[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.taskService.getList();
  }

  ngOnChanges(): void {
    if (this.taskGerada !== '')
      this.addItem(this.taskGerada)
  }

  addItem(task: string): void {
    const index = this.dataSource.length;
    const item = { position: (index + 1), task: task, status: false };
    this.dataSource.push(item);
    this.taskService.updateList(this.dataSource);
    this.table.renderRows();
  }

  removeItem(position: number) {
    this.dataSource = this.dataSource.filter(item => item.position !== position);
    this.taskService.updateList(this.dataSource);
  }

  changeStatus(position: number): void {
    const index = this.dataSource.findIndex(item => item.position === position)
    this.dataSource[index].status = !this.dataSource[index].status;
    this.taskService.updateList(this.dataSource);
  }

}
