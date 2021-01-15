import { CoordData } from '../CoordData'

export class AreaValidator {
  constructor(public coords: CoordData[]) {}

  validator(): boolean {
    switch (this.coords.length) {
      case 2:
        return this.validatorLine(this.coords[0], this.coords[1]);
      case 3:
        return this.validateTriangle(this.coords[0], this.coords[1], this.coords[2]);
      case 4:
        return this.vaildateRectangle(this.coords[0], this.coords[1], this.coords[2], this.coords[3]);
      default:
        throw new Error('좌표는 2, 3, 4개만 입력할 수 있습니다.')
    }
  }

  private validatorLine = (x1: CoordData, x2: CoordData): boolean => {
    return (x1.x !== x2.x) || (x1.y !== x2.y)
  }
  
  private validateTriangle = (x1: CoordData, x2: CoordData, y1: CoordData): boolean => {
    return (x1.x !== x2.x || x2.x !== y1.x) || (x1.y !== x2.y || x2.y !== y1.y) 
  }
  
  private vaildateRectangle = (x1: CoordData, x2: CoordData, y1: CoordData, y2: CoordData): boolean => {
    let result = 0;
    const target = [x1, x2, y1, y2];
    target.forEach(item => {
      result = result ^ item.x
      result = result ^ item.y
    })
    return result === 0;
  }
}

