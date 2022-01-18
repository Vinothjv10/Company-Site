import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filterString: string): any[] {
    if (!items) return [];
    if (!filterString) return items;

    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item['name']).toLowerCase().includes(filterString.toLowerCase());
      });
    });
  }

}
