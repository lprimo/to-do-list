import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {

  @Output() eventTask = new EventEmitter<string>();

  formItem!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm();
  }

  validateForm(): void {
    this.formItem = this.fb.group({
      task: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formItem.valid) {
      const task = this.formItem.value.task;
      this.eventTask.emit(task)
      this.formItem.reset();
      
    } else {
      this.formItem.reset();
      console.error('Dado inválido');
    }
  }

}
