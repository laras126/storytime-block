import { select } from '@wordpress/data';

import edit from './edit';
import save from './save';

const name = 'panel-nested';

const settings = {
	title: 'Storytime Panel Group',
	edit,
	save
};

export { name, settings };