import { select } from '@wordpress/data';

import edit from './edit';
import save from './save';

const name = 'panel-nested';

const settings = {
	attributes: {
		childPanelIds: {
			type: 'array',
			default: []
		},
	},
	title: 'Storytime Panel – Nested',
	edit,
	save
};

export { name, settings };