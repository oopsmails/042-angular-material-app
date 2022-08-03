import { SandboxHomeComponent } from './components/sandbox-home/sandbox-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sandbox', component: SandboxHomeComponent },
  { path: 'sandbox/home', component: SandboxHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandboxRoutingModule { }

