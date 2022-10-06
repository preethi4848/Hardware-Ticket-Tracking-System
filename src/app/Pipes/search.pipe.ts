import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../Models/ticket';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(inputData: Ticket[], args: string): Ticket[] {
    if(args == "")
      return inputData;
    else
      return inputData.filter((e)=>e.status.toUpperCase().includes(args.toUpperCase()));
  }
}
