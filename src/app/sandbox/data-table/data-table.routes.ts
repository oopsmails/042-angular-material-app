import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';

const routes: Routes = [
  { path: 'sandbox/datatable/inline-datepicker', component: InlineDatepickerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }

