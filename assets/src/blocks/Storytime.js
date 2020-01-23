import { InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';

// Comes from localized data
const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
	[ 'storytime/panel-content' ],
	[ 'storytime/panel-nav' ],
];

export default {
	title: 'Storytime',
	icon: 'book',
	category: 'layout',
	example: {},
	edit() {
		return <div className={ panelData.panel_classes }>
			<InnerBlocks
				template={ PANEL_TEMPLATE }
				templateLock="all"
			/>
			<InspectorControls>
				<PanelBody>
					Story Panel Settings (add ID here)
				</PanelBody>
			</InspectorControls>
		</div>;
	},
	save() {
		return <InnerBlocks.Content />;
	}
};