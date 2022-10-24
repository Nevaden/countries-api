import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  borders:any=[];
  borderNames: any;
  data: any;
  country: any;
  currencies: any;
  currenciesArray: any = [];
  name:any;
  nativeName: any;
  population: any;
  languages: any;
  bordersTest: any;
  constructor(private service: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = {
      name: this.route.snapshot.params['name'],   
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.name.name = params['name']  
        this.service.getCountryData(this.name.name).subscribe(responseData => {
          this.country = responseData;
          console.log()
          this.nativeName = this.country[0].name.nativeName[Object.keys(this.country[0].name.nativeName)[Object.keys(this.country[0].name.nativeName).length - 1]].common
                
          this.currencies = this.country[0].currencies
          this.currenciesArray = [];
          this.currencies = Object.keys(this.currencies).forEach(item => {
            this.currenciesArray.push(this.currencies[item].name)
          })


          this.country[0].population = this.country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          if(this.country[0].borders){
          this.borders = this.country[0].borders
          this.service.getCountryByCode(this.borders).subscribe((responseData: any) => {
            this.data = responseData;
            this.borders = [];
            ({name: this.borderNames} = this.borders)
            this.data.forEach((element: any) => {
              this.borders.push(element.name.common)
            });
            this.country[0].borders = this.borders
          })
        }
         })
      }
    )



 

  }

}
