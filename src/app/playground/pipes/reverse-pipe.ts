import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    const revValue = value.split('').reverse().join('')
    return revValue.length > limit ? revValue.substring(0, limit) + '...' : revValue
  }
}
