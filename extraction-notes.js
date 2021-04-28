const browseStudentDirsUtils = require('./browse-student-dirs-utils');
const ExcelJS = require('exceljs');
const config = require('./config');
const fs = require('fs/promises');

browseStudentDirsUtils.forEachStudentDir(dirent => {
	const folderName = dirent.name;
	const studentExcelFilename = './' + folderName + '/' + config.EXCEL_FILE_NAME;
	const workbook = new ExcelJS.Workbook();

	workbook.xlsx.readFile(studentExcelFilename).then(() => {
		const totalGrade = workbook
			.getWorksheet(config.WORKSHEET_NAME)
			.getCell(config.TOTAL_CELL)
			.value.result;

		const correctionFileName = './' + folderName + '/' + config.FINAL_GRADE_FILENAME;

		fs.writeFile(
			correctionFileName,
			'note:' + totalGrade
		).then(() => {
			console.log('Wrote note:' + totalGrade + ' to ' + correctionFileName);
		});
	});
});