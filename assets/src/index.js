// External
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';

// Internal
import StorytimeSettings from './blocks/Storytime';
import StorytimePanelNavSettings from './blocks/StorytimePanelNav';
import StorytimePanelSettings from './blocks/StorytimePanel';

registerBlockType( 'storytime/storytime', StorytimeSettings );
registerBlockType( 'storytime/panel', StorytimePanelSettings );
registerBlockType( 'storytime/panel-nav', StorytimePanelNavSettings );

// const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
//     return ( props ) => {
// 		if ( 'storytime/panel' === props.name ) {
// 			return (
// 				<Fragment>
// 					<BlockEdit { ...props } />
// 					<InspectorControls>
// 						<PanelBody>
// 							Heyy whassup
// 						</PanelBody>
// 					</InspectorControls>
// 				</Fragment>
// 			);
// 		}
		
// 	};
// }, "withInspectorControl" );
 
// wp.hooks.addFilter( 'editor.BlockEdit', 'storytime/panel', withInspectorControls );
