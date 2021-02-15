import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchedText: string): any[] {
    if (!items) return [];

    if (!searchedText ||  searchedText.length == 0)
      return items;

    return items.filter(item => isSubstring(item.title, searchedText) || isSubstring(item.authors, searchedText));

    function isSubstring(query, text) {
      return query.toLowerCase().indexOf(text) > -1
    }
  }

}
