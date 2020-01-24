// External
import { registerBlockType } from '@wordpress/blocks';

// Internal
import * as storytime from './blocks/storytime/index';
import * as storytimePanel from './blocks/storytime/panel';
import * as storytimeNavigation from './blocks/storytime/panel-navigation';
import * as storytimeContent from './blocks/storytime/panel-content';

const addNamespace = ( name) => 'storytime/' + name;

const blocks = [
	storytime,
	storytimePanel,
	storytimeNavigation,
	storytimeContent
];

blocks.forEach( ( { name, settings } ) => {

	registerBlockType( addNamespace( name ), {
		category: 'layout',
		icon: 'book',
		...settings
	} );
})
