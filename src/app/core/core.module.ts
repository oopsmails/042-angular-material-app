import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarFixedComponent } from './components/navbar-fixed/navbar-fixed.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavbarFixedComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([])
  ],
  exports: [
    NavbarFixedComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
