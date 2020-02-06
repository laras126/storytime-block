import {
	InnerBlocks,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';

import {
	withSelect
} from '@wordpress/data';

const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
	[ 'storytime/panel-content' ],
	[ 'storytime/panel-navigation' ],
];

// All these could be conslidated into a PanelDetails Component
// and maybe should be renamed to StoryPanel so that they aren't
// confused with the PanelInspector
const PanelId = withSelect( ( select ) => {
	return {
		id: select( 'core/editor' ).getSelectedBlock().clientId
	};
} )( ( { id } ) => {
	return <p><strong>Current Panel ID:</strong> { id }</p>;
} );

const NextPanelId = withSelect( ( select ) => {
	return {
		id: select( 'core/editor' ).getAdjacentBlockClientId()
	};
} )( ( { id } ) => {
	return <p><strong>{ id ? "Next Panel ID: " : "Last Panel in set." }</strong>{ id }</p>;
} );

const IsNestedPanel = withSelect( ( select ) => {
	const id = select( 'core/editor' ).getSelectedBlock().clientId;
	const parentId = select( 'core/editor' ).getBlockHierarchyRootClientId( id );
	const parentBlock = select( 'core/editor' ).getBlock( parentId );

	return parentBlock;
} )( ( block ) => {
	return <p>{ ( 'storytime/panel-nested' === block.name ) ? 'Nested Panel' : 'Single Panel' }</p>;

} );

class StorytimePanel extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {

		// Send markup to the pattern object
		panelData.panel_markup = <InnerBlocks
			template={ PANEL_TEMPLATE }
			templateLock={ 'all' }
		/>;

		return <Fragment>
			<Panel { ... panelData } />
			<InspectorControls>
				<PanelBody>
					<IsNestedPanel />
					<PanelId />
					<NextPanelId />
				</PanelBody>
			</InspectorControls>
		</Fragment>
	}
}

export default StorytimePanel;

