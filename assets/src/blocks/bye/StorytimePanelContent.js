import { InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

const PANEL_TEMPLATE = [
	[ 'core/heading', { placeholder: 'Panel title' } ],
	[ 'core/paragraph', { placeholder: 'Blurb for this panel' } ],
];

export default {
	title: 'Storytime Panel Content',
	icon: 'carrot',
    category: 'layout',
    supports: {
        inserter: false
    },
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