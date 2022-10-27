import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddToDoComponent,
    FooterComponent,
    HeaderComponent,
    ToDoItemComponent,
    ToDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
