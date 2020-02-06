import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';

const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
	[ 'storytime/panel-content' ],
	[ 'storytime/panel-navigation' ],
];

class StorytimePanel extends Component {

	constructor() {
		super( ...arguments )
	}
	getStuff() {

	}
	render( props ) {

		// Controller key/value code
		panelData.panel_markup = <InnerBlocks
			template={ PANEL_TEMPLATE }
			templateLock={ 'all' }
		/>;

		wp.data.select( 'core/block-editor' ).getBlocks().map( ( block ) => {
			// switch( block.name ) {
			// 	case 'storytime/panel':
			// 		console.log( block.name );
			// 		console.log( block.innerBlocks );
			// 		break;
			// }
		});// End

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

