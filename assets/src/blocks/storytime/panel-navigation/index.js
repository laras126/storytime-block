import edit from './edit';
import save from './save';

const name = 'panel-navigation';

const settings = {
	title: 'Storytime Panel Navigation',
	supports: {
		inserter: false,
	},
	edit,
	save
};

export { name, settings };