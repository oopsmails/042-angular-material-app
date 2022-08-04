import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { DynaTableComponent } from './components/dyna-table/dyna-table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';
import { DataTableRoutingModule } from './data-table.routes';

@NgModule({
  declarations: [
    InlineDatepickerComponent,
    DialogEditComponent,
    DialogBoxComponent,
    DynaTableComponent,
    ConfirmDialogComponent,
    EditTableComponent
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
    MatCheckboxModule,
    MatDialogModule,
    MatMomentDateModule,
    MatDialogModule,

    HttpClientModule,

    DataTableRoutingModule
  ],
  exports: [ ]
})
export class DataTableModule { }
