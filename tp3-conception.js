const gradingUtils = require('./grading-utils');

const criterias = [
	{
		name: 'diagramme de classes',
		row: 31,
	},
	{
		name: 'diagramme de séquence 1',
		row: 32,
	},
	{
		name: 'diagramme de séquence 2',
		row: 33,
	},
	{
		name: 'tableau de CRC',
		row: 34,
	},
];

gradingUtils.grade(criterias);