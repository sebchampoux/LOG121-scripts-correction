const readline = require('readline');
const ExcelJS = require('exceljs');
const config = require('./config');

const args = process.argv.slice(2);
const studentFolder = args[0];
const studentEvaluationFilename = studentFolder + config.EXCEL_FILE_NAME;

exports.grade = function (criterias) {
	const workbook = new ExcelJS.Workbook();
	workbook.xlsx.readFile(studentEvaluationFilename).then(async () => {
		const sheet = workbook.getWorksheet('Sheet1');

		for (const criteria of criterias) {
			await criteriaMark(criteria.name, sheet.getCell(config.MARK_COLUMN + criteria.row));
			await criteriaComment(criteria.name, sheet.getCell(config.COMMENT_COLUMN + criteria.row));
		}

		workbook.xlsx.writeFile(studentEvaluationFilename);
	});
}

const prompt = async function (query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise(resolve => rl.question(query, ans => {
		rl.close();
		resolve(ans);
	}))
};

const criteriaMark = async function (criteriaName, cell) {
	const value = await prompt('Note ' + criteriaName + ': ');
	cell.value = parseFloat(value);
};

const criteriaComment = async function (criteriaName, cell) {
	const value = await prompt('Commentaire ' + criteriaName + ': ');
	cell.value = value;
};