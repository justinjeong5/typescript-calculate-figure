import { AreaAnalysis } from './analysis/AreaAnalysis';
import { CoordData } from './CoordData'
import { ConsoleReport } from './reportTarget/ConsoleReport';
import { HtmlReport } from './reportTarget/HtmlReport';

export interface OutputTarget {
  print(report: string): void;
}

export interface Analyzer {
  run(coords: CoordData[]): string;
}

export class Report {
  static AreaAnalysisWithConsoleReport(coords: CoordData[]): Report {
    return new Report(
      new AreaAnalysis(coords),
      new ConsoleReport()
    )
  }

  static AreaAnalysisWithHtmlReport(coords: CoordData[]): Report {
    return new Report(
      new AreaAnalysis(coords),
      new HtmlReport()
    )
  }

  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  report(coords: CoordData[]): void {
    const output = this.analyzer.run(coords);
    this.outputTarget.print(output);
  }
}
