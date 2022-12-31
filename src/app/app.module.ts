import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ProyectsComponent } from './component/proyects/proyects.component';
import { ExperienceComponent } from './component/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    AboutComponent,
    ProyectsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
