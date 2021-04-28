const { constants } = require('fs');
const fs = require('fs/promises');
const config = require('./config');

const ignoreList = [
	'.git',
	'node_modules',
	'.vscode',
];

function studentDirectoriesFilter(dirent) {
	return !ignoreList.includes(dirent.name) && dirent.isDirectory();
}

exports.forEachStudentDir = function(callback) {
	fs.readdir('.', {withFileTypes: true}).then(dirContent => {
		const studentDirectories = dirContent.filter(studentDirectoriesFilter);
		studentDirectories.forEach(callback);
	});
};