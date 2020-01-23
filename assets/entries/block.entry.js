import { registerBlockType } from '@wordpress/blocks';

const classes = 'lrv-u-font-family-secondary lrv-u-background-color-brand-primary lrv-u-color-white';

registerBlockType( 'storytime/panel', {
	title: 'Panel',
	icon: 'carrot',
	category: 'layout',
	example: {},
	edit() {
		return <div className={ classes }>Hello World, step 1 (from the editor).</div>;
	},
	save() {
		return <div className={ classes }>Hello World, step 1 (from the frontend).</div>;
	}
} );
