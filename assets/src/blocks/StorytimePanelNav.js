import { InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

const NAV_TEMPLATE = [
	[ 'core/button' ]
];

const NAV_ALLOWED_BLOCKS = [
	[ 'core/button' ]
];

export default {
	title: 'Storytime Panel Nav',
	icon: 'sort',
	category: 'layout',
    example: {},
    supports: {
        inserter: false
    },
	edit() {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						Hey Story Panel Nav!
					</PanelBody>
				</InspectorControls>
				<InnerBlocks
					allowedBlocks={ NAV_ALLOWED_BLOCKS }
					template={ NAV_TEMPLATE }
					templateLock={ false }
				/>
			</Fragment>
			);
	},
	save() {
		return <InnerBlocks.Content />;
	}
}