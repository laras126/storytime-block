import { InnerBlocks, 
    InspectorControls, 
    RichText,
    RichTextShortcut
 } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Fragment } from '@wordpress/element';


// Almost a copy of Buttons

const NAV_TEMPLATE = [ [ 'core/button' ] ];

const NAV_ALLOWED_BLOCKS = [ 'core/button' ];

export default {
	title: 'Storytime Panel Nav',
	icon: 'sort',
	category: 'layout',
    example: {},
    supports: {
        inserter: false,
        align: true,
        alignWide: false,
    },
	edit() {
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						Story Panel Nav - buttonz?
					</PanelBody>
				</InspectorControls>
                <RichText>
                </RichText>
				<InnerBlocks
					allowedBlocks={ NAV_ALLOWED_BLOCKS }
					template={ NAV_TEMPLATE }
                    templateLock={ false }
                    __experimentalMoverDirection={ 'horizontal' }
                    onChange={ () => console.log( 'changed' ) }
				/>
			</Fragment>
			);
	},
	save() {
		return <InnerBlocks.Content />;
	}
}