import { InnerBlocks, 
    InspectorControls, 
    RichText,
 } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Fragment, Component } from '@wordpress/element';


// Almost a copy of Buttons

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
			<p>Panel Navigation</p>
		</Fragment>;
	}
}

export default StorytimePanelNavigation;
