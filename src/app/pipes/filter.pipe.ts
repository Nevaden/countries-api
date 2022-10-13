import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, filterField: string): any {
    if(typeof value != undefined && filterString === '' ){
      return value;
    }

    let returnArray: { title: boolean; }[] = [];

    for (const item of value) {
      let filterItem = item[filterField].official.toLowerCase()
      let filterStringCase = filterString.toLowerCase()
      if( filterItem.includes(filterStringCase) ){
        returnArray.push(item);
      }
  }
    return returnArray;
  }

}
