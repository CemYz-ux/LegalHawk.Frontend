import { Pipe, PipeTransform } from '@angular/core';

export enum RoundDirection {
  UP = 'up',
  DOWN = 'down',
}

@Pipe({ name: 'round', standalone: true })
export class RoundPipe implements PipeTransform {
  /**
   *
   * @param value - some number
   * @param digits - number of digits after the decimal point
   * @param dir - round up or down (floor/ceil)
   * @returns {string} formatted number with a fixed number of digits after the decimal point
   */
  transform(
    value: number,
    digits: number = 0,
    dir: String = RoundDirection.DOWN
  ): number {
    const round = dir === RoundDirection.DOWN ? Math.floor : Math.ceil;
    return round(value * 10 ** digits) / 10 ** digits;
  }
}
