import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouriteFilmsComponent } from './my-favourite-films.component';

describe('MyFavouriteFilmsComponent', () => {
  let component: MyFavouriteFilmsComponent;
  let fixture: ComponentFixture<MyFavouriteFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavouriteFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouriteFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
