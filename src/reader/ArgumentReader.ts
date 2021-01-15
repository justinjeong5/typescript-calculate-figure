import { CoordData } from "../CoordData";
import { CoordinateParser } from "./CoordinateParser";

export class ArgumentReader {
  data: CoordData[] = [];

  constructor(public input: string) {}
    
  read(): void {
    const coordinateParser = new CoordinateParser(this.input);
    this.data = coordinateParser.convert();
  }
}  