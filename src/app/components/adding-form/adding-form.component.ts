import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Film } from '../filmClass';

@Component({
  selector: 'app-adiing-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AdiingFormComponent implements OnInit{
  
@Output()  public addFilm: EventEmitter<Film> = new EventEmitter<Film>();

public isShowForm: boolean = false;
public addFilmForm: any = FormGroup;
imgSource: string =''
public showForm(): void {
  this.isShowForm = true;

}

ngOnInit(): void {
    
  this.addFilmForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    cashFlow: new FormControl('', Validators.required),
    rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10), Validators.maxLength(2)]),
    yearOfProduction: new FormControl('', Validators.required),
    addingDate: new FormControl('', Validators.required),
    poster: new FormControl('', Validators.required),
  })
  }

  public handlerUpload (event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgSource = typeof (reader.result) == 'string' ? reader.result:'';
    }
  }

  get name() {
    return this.addFilmForm.get('name');
  }
  get cashFlow() {
    return this.addFilmForm.get('cashFlow');
  }
  get rating() {
    return this.addFilmForm.get('rating');
  }

public onSubmit(): void {
  

  const id = this.addFilmForm.value.id;
   const name = this.addFilmForm.value.name;
   const cashFlow = this.addFilmForm.value.cashFlow;
   const rating =  this.addFilmForm.value.rating;
   const yearOfProduction = this.addFilmForm.value.yearOfProduction;
   const addingDate = this.addFilmForm.value.addingDate;
   const poster = this.imgSource;
   const favourite = false; 
   let film = new Film(id, name, cashFlow, rating, yearOfProduction, addingDate, poster, favourite)
    this.addFilm.emit(film);
    this.addFilmForm.reset();
    this.isShowForm = false;

  }

 

}

