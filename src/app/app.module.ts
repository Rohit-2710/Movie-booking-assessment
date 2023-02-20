import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    ListmovieComponent,
    UpdatemovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
