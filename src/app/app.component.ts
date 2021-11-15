import { Component } from '@angular/core';
import { Film } from './components/filmClass';
import { FILMS } from './components/films';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService) {}


  title = 'projectTwo';
  films = this.dataService.initFilms();
  public addFilm(film: Film): void {
this.films.push(film)
localStorage.setItem('films', JSON.stringify(this.films))

  }

  

  
}
