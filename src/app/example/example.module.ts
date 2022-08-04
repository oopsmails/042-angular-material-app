import { ModhyobittoTableComponent } from './components/modhyobitto-table/modhyobitto-table.component';
import { ModhyobittoFormFieldComponent } from './components/modhyobitto-form-field/modhyobitto-form-field.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleHomeComponent } from './components/example-home/example-home.component';
import { ExampleRoutingModule } from './example.routes';
import { RouterModule, Routes } from '@angular/router';
import { ModhyobittoDialogComponent } from './components/modhyobitto-dialog/modhyobitto-dialog.component';

const routes: Routes = [
  { path: 'example', component: ExampleHomeComponent },
  { path: 'example/home', component: ExampleHomeComponent }
];


const UTILITY_COMPONENTS = [
  ExampleHomeComponent,
  ModhyobittoFormFieldComponent,
  ModhyobittoDialogComponent,
  ModhyobittoTableComponent
];
@NgModule({
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  declarations: UTILITY_COMPONENTS,
  exports: UTILITY_COMPONENTS
})
export class ExampleModule { }
