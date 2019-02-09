import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vbarsplitter'
})

export class VbarSplitterPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return value.split('|').join(', ');
    }
}