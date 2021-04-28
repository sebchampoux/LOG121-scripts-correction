const { constants } = require('fs');
const fs = require('fs/promises');
const config = require('./config');

const ignoreList = [
	'.git',
	'node_modules',
	'.vscode',
];

fs.readdir('.', {withFileTypes: true}).then(dirContent => {
	const studentDirectories = dirContent.filter(studentDirectoriesFilter);
	studentDirectories.forEach(dirent => {
		const copyFileDestination = './' + dirent.name + '/' + config.EXCEL_FILE_NAME;
		fs.copyFile(config.TEMPLATE_FILENAME, copyFileDestination, constants.COPYFILE_EXCL).then(() => {
			console.log('Copied ' + config.TEMPLATE_FILENAME + ' to ' + copyFileDestination);
		});
	});
});

function studentDirectoriesFilter(dirent) {
	return !ignoreList.includes(dirent.name) && dirent.isDirectory();
}
