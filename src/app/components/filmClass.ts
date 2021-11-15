export class Film {
  constructor (
    public id: number,
 public name: string,
 public cashFlow: number,
 public rating: number,
 public yearOfProduction: number,
 public addingDate: Date,
 public poster: string,
 public favourite: boolean,
 
  ) {this.id=Date.now()}}
