// External
import { registerBlockType } from '@wordpress/blocks';

// Internal
import * as storytimePanel from './blocks/panel';
import * as storytime from './blocks/panel-nested';
import * as storytimeNavigation from './blocks/panel-navigation';
import * as storytimeContent from './blocks/panel-content';

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
