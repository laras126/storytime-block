import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, Buttons } from '@wordpress/block-editor';

const panelData = JSON.parse( modules.panel );

const TMPL = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Panel Title' } ],
	[ 'core/paragraph', { placeholder: 'Panel Text' } ],
	[ 'core/button', { 
		placeholder: 'Next Panel',
	 } ],
];


import{ createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { PanelBody } from '@wordpress/components';
 
const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody>
                        Heyy whassup
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, "withInspectorControl" );
 
wp.hooks.addFilter( 'editor.BlockEdit', 'storytime/panel', withInspectorControls );

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
		console.log( props );
		
        return <BlockListBlock { ...props } />;
    };
}, 'withClientIdClassName' );
 
wp.hooks.addFilter( 'editor.BlockListBlock', 'storytime/panel', withClientIdClassName );

registerBlockType( 'storytime/panel', {
	title: 'Panel',
	icon: 'carrot',
	category: 'layout',
	example: {},
	edit() {
		return <div className={ panelData.panel_classes }>
			<InnerBlocks
				template={ TMPL }
			/>
            <Buttons />
		</div>;
	},
	save() {
		return <InnerBlocks.Content />;
	}
} );
