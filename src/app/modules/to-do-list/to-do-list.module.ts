import { NgModule } from "@angular/core";
import { ToDoListComponent } from "./to-do-list.component";
import { CommonModule } from "@angular/common";
import { ToDoListRoutingModule } from "./to-do-list.router";
import { ItemComponent } from "./components/item/item.component";
import { ListComponent } from "./components/list/list.component";
import { SharedModule } from "../../shared/shared.module";
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [
      ToDoListComponent,
      ItemComponent,
      ListComponent
    ],
    imports: [
      CommonModule,
      ToDoListRoutingModule,
      SharedModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatInputModule,
    ]
  })
  export class ToDoListModule { }