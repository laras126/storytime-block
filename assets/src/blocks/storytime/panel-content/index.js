import edit from './edit';
import save from './save';

const name = 'panel-content';

const settings = {
	title: 'Storytime Panel Content',
	supports: {
		inserter: false,
	},
	edit,
	save
};

export { name, settings };