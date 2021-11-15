import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { AdiingFormComponent } from './components/adding-form/adding-form.component';
import {  FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MyFavouriteFilmsComponent } from './components/my-favourite-films/my-favourite-films.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchHeaderComponent,
    FilmListComponent,
    ShortNumberPipe,
    AdiingFormComponent,
    MyFavouriteFilmsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatIconModule,
    HttpClientModule
   
  
   
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
