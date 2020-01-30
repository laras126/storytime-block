import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';

// Comes from localized data
const panelData = JSON.parse( modules.panel );

const ALLOWED_BLOCKS = [ 'storytime/panel' ];

class Storytime extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		panelData.panel_markup = <InnerBlocks 
			allowedBlocks={ ALLOWED_BLOCKS }
		/>;

		return <Fragment>
			<Panel { ... panelData } />
			<InspectorControls>
				<PanelBody>
					Main Storytime
				</PanelBody>
			</InspectorControls>
		</Fragment>;
	}
}

export default Storytime;