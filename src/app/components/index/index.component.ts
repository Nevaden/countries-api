import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dropdown: any;
  data: any;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.dropdown = document.getElementById('dropDownContent');
    this.data = this.service.getData().subscribe(responseData => {
      this.data = responseData;
      console.log(responseData)
    })
    
  }


  toggleDropDown(){
    this.dropdown?.classList.toggle("visible")
  }
}
