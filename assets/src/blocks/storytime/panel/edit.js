import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

// Comes from localized data
// const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
    [ 'storytime/panel-content' ],
    [ 'storytime/panel-navigation' ],
];

class StorytimePanel extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <div>
		<InnerBlocks
			template={ PANEL_TEMPLATE }
			templateLock={ 'all' }
		/>
		<InspectorControls>
			<PanelBody>
				Storytime Panel - ID here!
			</PanelBody>
		</InspectorControls>
	</div>
	}
}

export default StorytimePanel;

