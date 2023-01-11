import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './component/about/editabout.component';
import { NewaboutComponent } from './component/about/newabout.component';
import { ContactComponent } from './component/contact/contact.component';
import { EditeducacionComponent } from './component/experience/editeducacion.component';
import { EditexperienciaComponent } from './component/experience/editexperiencia.component';
import { NewEducacionComponent } from './component/experience/new-educacion.component';
import { NewExperienciaComponent } from './component/experience/new-experiencia.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EditproyectComponent } from './component/proyects/editproyect.component';
import { NewproyectComponent } from './component/proyects/newproyect.component';
import { EditskillComponent } from './component/skills/editskill.component';
import { NewskillComponent } from './component/skills/newskill.component';

const routes: Routes = [
  {    path: '', component: HomeComponent},
  {    path: 'login', component: LoginComponent},
  {    path: 'contact', component: ContactComponent},
  {    path: 'newexp', component: NewExperienciaComponent},
  {    path: 'newedu', component: NewEducacionComponent},
  {    path: 'editeduca/:id', component: EditeducacionComponent},
  {    path: 'editexp/:id', component: EditexperienciaComponent},
  {    path: 'nuevaskill', component: NewskillComponent},
  {    path: 'editskill/:id', component: EditskillComponent},
  {    path: 'nuevopro', component: NewproyectComponent},
  {    path: 'editpro/:id', component: EditproyectComponent},
  {    path: 'nuevoabout', component: NewaboutComponent},
  {    path: 'editabout/:id', component: EditaboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
