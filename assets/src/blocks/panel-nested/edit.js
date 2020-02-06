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

	getChildPanelIds() {
		// let panels = [];

		// select( 'core/block-editor' ).getBlocks()
		// 	.filter( block => {
		// 		if ( 'storytime/panel-nested' !== block.name ) {
		// 			return false;
		// 		}
		// 		return true;
		// 	}).map( ( block ) => {
		// 		block.innerBlocks.map( block => panels.push( block.clientId ) );
		// 	});

		// return panels;
		withSelect( ( select, blockData ) => {
			return {
			  innerBlocks: select( 'core/editor' ).getBlocks( blockData.clientId )
			};
		  } )( ( { innerBlocks, className } ) => {
			console.log('inner blocks content', innerBlocks);
			return <div className={className}>
				 <InnerBlocks template={TEMPLATE} />
				</div>
		} );
	}

	getPreviousBlockClientId() {
		return select( 'core/block-editor' ).getPreviousBlockClientId();
	}

	render() {
		panelData.panel_markup = <InnerBlocks
			allowedBlocks={ ALLOWED_BLOCKS }
		/>;

		console.log( this.getChildPanelIds() );
		console.log( this.getPreviousBlockClientId() );

		this.props.attributes.childPanelIds = this.getChildPanelIds();

		console.log( this.props.attributes );

		const prevBlock = select( 'core/block-editor' ).getBlock( this.getPreviousBlockClientId() );

		if ( null !== prevBlock && 'storytime/panel' === prevBlock.name ) {
			console.log('panel block previous');
		}

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

export default StorytimePanelNested;