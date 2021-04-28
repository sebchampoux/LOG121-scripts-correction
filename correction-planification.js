const gradingUtils = require('./grading-utils');

const criterias = [
	{
		name: 'planification tâches',
		row: 8,
	},
	{
		name: 'planification rapport',
		row: 9,
	},
];

gradingUtils.grade(criterias);