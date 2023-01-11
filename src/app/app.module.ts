import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { SkillsComponent } from './component/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactComponent } from './component/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './component/experience/new-experiencia.component';
import { NewEducacionComponent } from './component/experience/new-educacion.component';
import { EditeducacionComponent } from './component/experience/editeducacion.component';
import { EditexperienciaComponent } from './component/experience/editexperiencia.component';
import { NewskillComponent } from './component/skills/newskill.component';
import { EditskillComponent } from './component/skills/editskill.component';
import { EditproyectComponent } from './component/proyects/editproyect.component';
import { NewproyectComponent } from './component/proyects/newproyect.component';
import { EditaboutComponent } from './component/about/editabout.component';
import { NewaboutComponent } from './component/about/newabout.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    AboutComponent,
    ProyectsComponent,
    ExperienceComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    ContactComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    EditeducacionComponent,
    EditexperienciaComponent,
    NewskillComponent,
    EditskillComponent,
    NewproyectComponent,
    EditproyectComponent,
    EditaboutComponent,
    NewaboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
