import { DataTableModule } from './data-table/data-table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxHomeComponent } from './components/sandbox-home/sandbox-home.component';
import { SandboxRoutingModule } from './sandbox.routes';

@NgModule({
  declarations: [
    SandboxHomeComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    SandboxRoutingModule
  ]
})
export class SandboxModule { }
