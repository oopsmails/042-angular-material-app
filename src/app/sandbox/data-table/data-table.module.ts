import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableRoutingModule } from './data-table.routes';



@NgModule({
  declarations: [
    InlineDatepickerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,

    DataTableRoutingModule
  ],
  exports: [ ]
})
export class DataTableModule { }
