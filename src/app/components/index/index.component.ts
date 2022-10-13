import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  dropdown: any;
  constructor() { }

  ngOnInit(): void {
    this.dropdown = document.getElementById('dropDownContent');
  }


  toggleDropDown(){
    this.dropdown?.classList.toggle("visible")
  }
}
