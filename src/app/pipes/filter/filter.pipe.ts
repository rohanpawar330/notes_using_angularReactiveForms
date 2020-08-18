import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  /**
  * Transform
  *
  * @param {any[]} items
  * @param {string} searchText
  * @returns {any[]}
  */
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
  }
}