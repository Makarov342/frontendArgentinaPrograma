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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
