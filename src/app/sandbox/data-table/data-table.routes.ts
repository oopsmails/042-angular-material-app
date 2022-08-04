import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { DynaTableComponent } from './components/dyna-table/dyna-table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { InlineDatepickerComponent } from './components/inline-datepicker/inline-datepicker.component';

const routes: Routes = [
  { path: 'sandbox/datatable/inline-datepicker', component: InlineDatepickerComponent },
  { path: 'sandbox/datatable/dialog-edit', component: DialogEditComponent },
  { path: 'sandbox/datatable/edit-table', component: EditTableComponent },
  { path: 'sandbox/datatable/dyna-table', component: DynaTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }

