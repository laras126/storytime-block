import {
	InnerBlocks,
	InspectorControls,
	RichText
} from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
import Panel from '../../patterns/modules/panel/panel';

import {
	select,
	withSelect,
	useSelect
} from '@wordpress/data';

const panelData = JSON.parse( modules.panel );

const PANEL_TEMPLATE = [
	[ 'storytime/panel-content' ]
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

	updatePanelAttributes() {

	}

	getNextPanelId() {
		// Get the id of the next panel in here doi
		return '12378462834623';
	}

	render() {

		/**
		 * Need to create buttons obj based on:
		 *
		 * if next panel is a nested panel,
		 * 	get the each nested panel and generate a button for each
		 * else it is a single panel
		 * 	generate a button for the single panel
		 *
		 **/

		const buttons = [
			{
				text: 'Button 1',
				id: 'idyeah',
				rel: 'whereToGo'
			},
			{
				text: 'Button 2',
				id: 'idyeah',
				rel: 'whereToGo'
			},
			{
				text: 'Button 3',
				id: 'idyeah',
				rel: 'whereToGo'
			}
		];

		// This code is essentially redundant to what is in PHP.
		const button_struct = panelData.panel_buttons[0];
		panelData.panel_buttons = [];

		// get all buttons from panel state or attributes or w/e
		buttons.map( ( button ) => {
			// could we import / use the larva prototype JS here somehow?
			let new_button = Object.assign( {}, button_struct ); // need clonedeep

			new_button.c_button_href = '#' + this.getNextPanelId();
			new_button.c_button_text = <RichText
					value={ button.text }
					onChange={ this.updatePanelAttributes }
				/>;

			panelData.panel_buttons.push( new_button );
		});

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

