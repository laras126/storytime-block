// External
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { PanelBody } from '@wordpress/components';

// Internal
import PanelSettings from './blocks/StoryPanel';
import PanelNavSettings from './blocks/StoryPanelNav';
import PanelContentSettings from './blocks/StoryPanelContent';

registerBlockType( 'storytime/panel', PanelSettings );
registerBlockType( 'storytime/panel-nav', PanelNavSettings );
registerBlockType( 'storytime/panel-content', PanelContentSettings );

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
