import { InnerBlocks, 
    InspectorControls, 
    RichText,
 } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Fragment, Component } from '@wordpress/element';

const NAV_TEMPLATE = [ [ 'core/button' ] ];

const NAV_ALLOWED_BLOCKS = [ 'core/button' ];

class StorytimePanelNavigation extends Component {

	constructor() {
		super( ...arguments )

		// this.splitBlock = this.splitBlock.bind( this )

		// this.getTimelineicon = this.getTimelineicon.bind(this)

		// this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this )
	}
	render() {
		return <Fragment>
			<InnerBlocks
				allowedBlocks={ NAV_ALLOWED_BLOCKS }
				template={ NAV_TEMPLATE }
				templateLock={ false }
				__experimentalMoverDirection={ 'horizontal' }
				onChange={ () => console.log( 'changed' ) }
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
			<InspectorControls>
				<PanelBody>
					Story Panel Nav - buttonz?
				</PanelBody>
			</InspectorControls>
		</Fragment>;
	}
}

export default StorytimePanelNavigation;
