import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { MyFavouriteFilmsComponent } from './components/my-favourite-films/my-favourite-films.component';

const routes: Routes = [
  { path: 'my-favourite-films', component: MyFavouriteFilmsComponent },
  { path: 'home', component: FilmListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
