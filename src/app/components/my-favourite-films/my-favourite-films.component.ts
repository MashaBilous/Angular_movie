import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Film } from '../filmClass';
@Component({
  selector: 'app-my-favourite-films',
  templateUrl: './my-favourite-films.component.html',
  styleUrls: ['./my-favourite-films.component.scss'],
  providers: [DataService]
})
export class MyFavouriteFilmsComponent implements OnInit {
  public  films:Film[] = []
  public isFiltered: boolean = false;
  visibility: boolean 
  table: boolean
 
  constructor(private dataService: DataService) {}
  @Input() public film: Film;
  @Output() remove = new EventEmitter();
  
  ngOnInit(): void {
   this.films = JSON.parse(localStorage.getItem('films'))
   .filter(film => film.favourite == true);
   this.visibility = this.dataService.initVisibility();
  this.table = this.dataService.initView();
  }

  toggle() {
    this.visibility = !this.visibility
    localStorage.setItem('visibility', JSON.stringify(this.visibility));
  }

  toggleView() {
    this.table = !this.table
    localStorage.setItem('table', JSON.stringify(this.table));
  }

  public filter(e: KeyboardEvent) {
    const value = (e.target as HTMLInputElement).value.toLocaleLowerCase();
    if (value) {
      
    this.films = this.films.filter((film)=> film.name.toLowerCase().includes(value));
    this.isFiltered = true;
    } else {
      this.films = JSON.parse(localStorage.getItem('films'));
      this.isFiltered = false;
    }
    }
   
    public sortByName() {
      this.films = this.films.sort(
        (a, b) => a.name.localeCompare(b.name)
      )
    }

    public sortByAddingDate() {
      this.films = this.films.sort (
        (a, b) => {
          return new Date(b.addingDate).getTime() - new Date(a.addingDate).getTime();
        }
      )
    }

    public sortByProductionYear() {
      this.films = this.films.sort (
        (a, b) => { 

          return b.yearOfProduction - a.yearOfProduction;
        }
      )
    }

  public removeFilm(id: number) {
    this.films = this.dataService.initFilms().filter(film => film.id !== id);
    localStorage.setItem('films', JSON.stringify(this.films))
    this.films = JSON.parse(localStorage.getItem('films'))
    .filter(film => film.favourite == true)
}

public favouriteFilm(id: number){
  this.films.find(film => film.id === id).favourite = !this.films.find(film => film.id === id).favourite
  localStorage.setItem('films', JSON.stringify(this.films))
  this.films = JSON.parse(localStorage.getItem('films'))
  .filter(film => film.favourite == true)
}
    public initFilms(): void {
      this.films =  this.dataService.initFilms();
    }
  
}



