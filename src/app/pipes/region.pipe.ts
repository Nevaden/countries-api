import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'region'
})
export class RegionPipe implements PipeTransform {

  transform(value: any, filterString: string, filterField: string): any {
    if(typeof value != undefined && filterString === '' ){
      return value;
    }
    console.log(value,"value passed region")
    let returnArray: { title: boolean; }[] = [];

    for (const item of value) {
      let filterItem = item[filterField].toLowerCase()
      let filterStringCase = filterString.toLowerCase()
      if( filterItem.includes(filterStringCase) ){
        returnArray.push(item);
      }
  }
    return returnArray;
  }

}
