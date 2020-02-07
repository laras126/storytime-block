// External
import { registerBlockType } from '@wordpress/blocks';

// Internal
import * as storytimePanel from './blocks/panel';
import * as storytimePanelNested from './blocks/panel-nested';
import * as storytimeContent from './blocks/panel-content';

const addNamespace = ( name) => 'storytime/' + name;

const blocks = [
	storytimePanel,
	storytimePanelNested,
	storytimeContent
];

blocks.forEach( ( { name, settings } ) => {

	registerBlockType( addNamespace( name ), {
		category: 'layout',
		icon: 'book',
		...settings
	} );
})
