import edit from './edit';
import save from './save';

const name = 'panel';

const settings = {
	attributes: {
		buttons: {
			type: 'object',
			// source: 'query',
			// selector: '.c-button',
			// query: {
			// 	text: {
			// 		type: 'string',
			// 		source: 'html',
			// 		selector: 'button'
			// 	},
			// 	id: {
			// 		type: 'string',
			// 		source: 'attribute',
			// 		attribute: 'id',
			// 	},
			// 	rel: {
			// 		type: 'string',
			// 		source: 'attribute',
			// 		attribute: 'rel',
			// 	},
			// },
			default: {
				text: 'Button boo boo',
				id: 'idyeah',
				rel: 'whereToGo'
			}
		}
	},
	title: 'Storytime Panel',
	edit,
	save
};

export { name, settings };