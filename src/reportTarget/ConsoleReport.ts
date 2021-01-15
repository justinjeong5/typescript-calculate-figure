import { OutputTarget } from '../Report'

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}