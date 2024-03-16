import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnChanges {

  @Input() taskGerada: string = '';
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnChanges(): void {
    if (this.taskGerada !== '')
      this.addItem(this.taskGerada)
  }

  addItem(task: string): void {
    const index = this.dataSource.length
    const item = { position: (index + 1), task: task, status: false }
    this.dataSource.push(item)
    this.table.renderRows()
  }

  removeItem(position: number) {
    this.dataSource = this.dataSource.filter(item => item.position !== position);
  }

  displayedColumns: string[] = ['position', 'task', 'status', 'action'];
  dataSource = [
    { position: 1, task: 'Task exemplo', status: false },
    { position: 2, task: 'Task exemplo => status concluído', status: true }
  ];

  changeStatus(position: number): void {
    const index = this.dataSource.findIndex(item => item.position === position)
    this.dataSource[index].status = !this.dataSource[index].status;
  }

}
