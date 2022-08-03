import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleHomeComponent } from './components/example-home/example-home.component';
import { ExampleRoutingModule } from './example.routes';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'example', component: ExampleHomeComponent },
  { path: 'example/home', component: ExampleHomeComponent }
];

@NgModule({
  declarations: [
    ExampleHomeComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
