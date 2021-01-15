import { CoordData } from '../CoordData'
import { AreaValidator } from './AreaValidator'

export class AreaCalculator {
  constructor(
    public coords: CoordData[],
    private areaValidator = new AreaValidator(coords)
  ) {}

  calculate(): number {
    switch (this.coords.length) {
      case 2:
        return this.calculateLength(this.coords[0], this.coords[1]);
      case 3:
        return this.calculateTriangleArea(this.coords[0], this.coords[1], this.coords[2]);
      case 4:
        return this.calculateRectangleArea(this.coords[0], this.coords[1], this.coords[2], this.coords[3]);
      default:
        throw new Error('좌표는 2, 3, 4개만 입력할 수 있습니다.')
    }
  }

  private calculateLength = (x1: CoordData, x2: CoordData): number => {
    if(!this.areaValidator.validator()) throw new Error('삼각형의 모양이 올바르지 않습니다. 세 좌표가 한 직선위에 있습니다.')
    const width = x1.x - x2.x;
    const height = x1.y - x2.y;
    const pythagoras = (width * width + height * height)
    return Math.sqrt(pythagoras);
  }

  private calculateTriangleArea = (x1: CoordData, x2: CoordData, y1: CoordData): number =>{
    if(!this.areaValidator.validator()) throw new Error('삼각형의 모양이 올바르지 않습니다. 세 좌표가 한 직선위에 있습니다.')
    const diagonalFormula = (x1.x * x2.y + x2.x * y1.y + y1.x * x1.y) - 
    (x2.x * x1.y + y1.x * x2.y + x1.x * y1.y)
    return Math.abs(diagonalFormula) / 2;
  }

  private calculateRectangleArea = (x1: CoordData, x2: CoordData, y1: CoordData, y2: CoordData): number =>{
    if(!this.areaValidator.validator()) throw new Error('좌표가 4개인 경우 직사각형만 입력해주세요. \n마름모나 사다리꼴은 계산하지 않습니다.')
    const width = Math.abs(x1.y - x2.y);
    const height = Math.abs(x1.x - y1.x);
    return width * height; 
  }
}
