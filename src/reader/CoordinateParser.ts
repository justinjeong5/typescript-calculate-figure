import { CoordData } from '../CoordData';

export class CoordinateParser {
  // (1,2)-(3,4)-(4,5)
  constructor(public input: string){}

  convert(): CoordData[] {
    return this.input.split('-') // (1,2)  (3,4)  (4,5)
    .map((row: string): CoordData => this.parser(row))
  }

  parser(target: string): CoordData { // (1,2)
    const stringArr = target.split('');
    stringArr.splice(0, 1);
    stringArr.splice(target.length - 1, 1);
    const temp = stringArr.join('').split(',');
    return {
      x: parseInt(temp[0]),
      y: parseInt(temp[1])
    }
  }
}