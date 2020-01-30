import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';

const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
	[ 'storytime/panel-content' ],
	[ 'storytime/panel-navigation' ],
];

class StorytimePanel extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		panelData.panel_markup = <InnerBlocks
			template={ PANEL_TEMPLATE }
			templateLock={ 'all' }
		/>;

		return <Fragment>
			<Panel { ... panelData } />
			<InspectorControls>
				<PanelBody>
					Storytime Panel - ID here!
				</PanelBody>
			</InspectorControls>
		</Fragment>
	}
}

export default StorytimePanel;

