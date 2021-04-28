const { constants } = require('fs');
const fs = require('fs/promises');
const config = require('./config');
const browseStudentDirsUtils = require('./browse-student-dirs-utils');

browseStudentDirsUtils.forEachStudentDir(dirent => {
	const copyFileDestination = './' + dirent.name + '/' + config.EXCEL_FILE_NAME;
	fs.copyFile(config.TEMPLATE_FILENAME, copyFileDestination, constants.COPYFILE_EXCL).then(() => {
		console.log('Copied ' + config.TEMPLATE_FILENAME + ' to ' + copyFileDestination);
	});
});