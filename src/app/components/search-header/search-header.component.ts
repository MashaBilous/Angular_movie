import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
  providers: [DataService]
})
export class SearchHeaderComponent implements OnInit {
  
  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
  }
  
}
