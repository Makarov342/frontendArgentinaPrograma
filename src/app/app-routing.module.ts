import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {    path: '', component: HomeComponent},
  {    path: 'login', component: LoginComponent},
  {    path: 'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
