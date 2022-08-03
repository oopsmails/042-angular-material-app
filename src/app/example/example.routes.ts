import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleHomeComponent } from './components/example-home/example-home.component';

const routes: Routes = [
    { path: 'example', component: ExampleHomeComponent },
    { path: 'example/home', component: ExampleHomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { } 

