import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';
import { select, getAdjacentBlockClientId } from '@wordpress/data';

// Comes from localized data
const panelData = JSON.parse( modules.panel );

const ALLOWED_BLOCKS = [ 'storytime/panel' ];

class StorytimePanelNested extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		// No buttons in the panel group
		panelData.panel_buttons = [];
		panelData.panel_markup = <InnerBlocks
			allowedBlocks={ ALLOWED_BLOCKS }
		/>;

		return <Fragment>
			<Panel { ... panelData } />
			<InspectorControls>
				<PanelBody>
					Group of Nested Panels.
				</PanelBody>
			</InspectorControls>
		</Fragment>;
	}
}

export default StorytimePanelNested;