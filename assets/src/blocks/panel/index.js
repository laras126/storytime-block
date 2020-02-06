import edit from './edit';
import save from './save';

const name = 'panel';

const settings = {
	attributes: {
		// Maybe button data will be collected here.
		buttons: {
			type: 'array',
			default: []
		}
	},
	title: 'Storytime Panel',
	edit,
	save
};

export { name, settings };