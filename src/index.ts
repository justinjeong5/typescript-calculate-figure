import { Figure } from './Figure'
import { Report } from './Report'

const coordReader = Figure.fromArgument('(0,2)-(0,6)-(3,2)');
coordReader.load();

const result = Report.AreaAnalysisWithConsoleReport(coordReader.coordinates);
result.report(coordReader.coordinates);

const resultWithHtmlReport = Report.AreaAnalysisWithHtmlReport(coordReader.coordinates);
resultWithHtmlReport.report(coordReader.coordinates)
 