import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

// Comes from localized data
const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
    [ 'storytime/panel-content' ],
    [ 'storytime/panel-nav' ],
];

export default {
	title: 'Storytime Panel',
	icon: 'carrot',
    category: 'layout',
	edit() {
		return <div className={ panelData.panel_classes + ' lrv-u-background-color-white' }>
			<InnerBlocks
                template={ PANEL_TEMPLATE }
                templateLock={ 'all' }
			/>
            <InspectorControls>
				<PanelBody>
					Storytime Panel - ID here!
				</PanelBody>
			</InspectorControls>
		</div>;
	},
	save() {
		return <InnerBlocks.Content />;
	}
};