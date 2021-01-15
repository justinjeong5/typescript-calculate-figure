import { CoordData } from '../CoordData';
import { CoordinateParser } from './CoordinateParser'

const prompt = require('prompt-sync')();

export class ConsoleReader {
  data: CoordData[] = [];

  constructor() {}
    
  read(): void {
    const coord = prompt('좌표를 입력하세요. ex) (1,2)-(2,3)-(4,5)');
    const coordinateParser = new CoordinateParser(coord);
    this.data = coordinateParser.convert();
  }
}  