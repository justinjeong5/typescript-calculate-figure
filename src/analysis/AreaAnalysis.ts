import { Analyzer } from '../Report';
import { CoordData } from '../CoordData';
import { AreaCalculator } from './AreaCalculator'

export class AreaAnalysis implements Analyzer {
  constructor(
    public coords: CoordData[],
    private areaCalculator: AreaCalculator = new AreaCalculator(coords)
  ) {}

  run(): string {
    let result = this.areaCalculator.calculate();
    return `This coords has ${result} area/length`;
  }
} 