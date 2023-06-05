import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCompletedComponent } from './form-completed/form-completed.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path : '', component : HomepageComponent },  
  { path : 'formCompleted', component : FormCompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
