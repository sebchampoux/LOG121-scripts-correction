const gradingUtils = require('./grading-utils');

const criterias = [
	{
		name: 'planification des tâches',
		row: 8,
	},
	{
		name: 'planification du rapport',
		row: 9,
	},
];

gradingUtils.grade(criterias);