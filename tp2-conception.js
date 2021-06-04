const gradingUtils = require('./grading-utils');

const criterias = [
	{
		name: 'diagramme de classes',
		row: 33,
	},
	{
		name: 'diagramme de séquence',
		row: 34,
	},
	{
		name: 'tableau de CRC',
		row: 32,
	},
];

gradingUtils.grade(criterias);