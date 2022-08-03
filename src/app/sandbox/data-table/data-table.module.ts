import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableRoutingModule } from './data-table.routes';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    InlineDatepickerComponent,
    DialogEditComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
    MatDialogModule,

    DataTableRoutingModule
  ],
  exports: [ ]
})
export class DataTableModule { }
