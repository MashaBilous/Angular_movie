import { Injectable } from '@angular/core';
import { Film } from './components/filmClass';
import { FILMS } from '../app/components/films';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }

  public films: Film [] = []
  visibility: boolean 
  table: boolean


 public initFilms(): Film[] {
  if (localStorage.getItem('films')) {
this.films = JSON.parse(localStorage.getItem('films'));
 } else {
  localStorage.setItem('films', JSON.stringify(FILMS))
  this.films = FILMS;
 }
return this.films
}

 public initVisibility(): boolean {
  this.visibility = JSON.parse(localStorage.getItem('visibility'));
  return this.visibility;
   }

   public initView(): boolean {
    this.table = JSON.parse(localStorage.getItem('table'));
    return this.table;
     }

public removeFilm(id: number) {
  this.films = this.films.filter(film => film.id !== id);
  localStorage.setItem('films', JSON.stringify(this.films))
}



}