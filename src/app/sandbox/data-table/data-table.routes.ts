import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';

const routes: Routes = [
  { path: 'sandbox/datatable/inline-datepicker', component: InlineDatepickerComponent },
  { path: 'sandbox/datatable/dialog-edit', component: DialogEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }

