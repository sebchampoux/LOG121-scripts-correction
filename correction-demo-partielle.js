const gradingUtils = require('./grading-utils');

const criterias = [
	{
		name: 'lecture/extraction XML',
		row: 30,
	},
	{
		name: 'affichage statique du réseau',
		row: 33,
	},
	{
		name: 'création usines',
		row: 32,
	},
	{
		name: 'création composantes',
		row: 31,
	},
];

gradingUtils.grade(criterias);