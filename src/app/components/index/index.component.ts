import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Countries: any;
  dropdown: any;
  data: any;
  filterContent: string = '';
  region: string = '';
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.dropdown = document.getElementById('dropDownContent');

    this.data = this.service.getDataArgs(['region','population','flags','capital','name']).subscribe(responseData => {
      this.Countries = responseData;
      console.log(responseData)
    })
    
  }


  toggleDropDown(){
    this.dropdown?.classList.toggle("visible")
  }
}
