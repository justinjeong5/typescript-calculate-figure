import { ArgumentReader } from './reader/ArgumentReader';
import { ConsoleReader } from './reader/ConsoleReader';
import { CoordData } from './CoordData'

interface DataReader {
  read(): void;
  data: CoordData[];
}

export class Figure {

  static fromConsole (): Figure {
    return new Figure(new ConsoleReader());
  }

  static fromArgument (input: string): Figure {
    return new Figure(new ArgumentReader(input));
  }

  coordinates: CoordData[] = [];
  
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.coordinates = this.reader.data;
  }
} 