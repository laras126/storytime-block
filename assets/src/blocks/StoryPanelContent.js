import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const PANEL_TEMPLATE = [
	[ 'core/heading', { placeholder: 'Panel title' } ],
	[ 'core/paragraph', { placeholder: 'Blurb for this panel' } ],
	// [ 'core/image' ],
];

export default {
	title: 'Story Panel Content',
	icon: 'carrot',
	category: 'layout',
	example: {},
	edit() {
		return <Fragment>
			<InnerBlocks
                template={ PANEL_TEMPLATE }
                templateLock={ false }
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</Fragment>;
	},
	save() {
		return <InnerBlocks.Content />;
	}
};