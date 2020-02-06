import {
	InnerBlocks,
	InspectorControls,
 } from '@wordpress/block-editor';

import { PanelBody } from '@wordpress/components';
import { Fragment, Component } from '@wordpress/element';

// The idea here is to use the Gutenberg UI to collect data to send to
// a pattern object for the front-end rather than sending markup.
// Not there quite yet.

const button = [
	'core/button',
	{
		text: 'Next Panel',
		url: '#',
		className: 'js-Panel-nav'
	}
];

const NAV_TEMPLATE = [ button ];
const NAV_ALLOWED_BLOCKS = [ 'core/button' ];
class StorytimePanelNavigation extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <Fragment>
			<InnerBlocks
				allowedBlocks={ NAV_ALLOWED_BLOCKS }
				template={ NAV_TEMPLATE }
				templateLock={ false }
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
			<InspectorControls>
				<PanelBody>
					Story Panel Navigation.
				</PanelBody>
			</InspectorControls>
		</Fragment>;
	}
}

export default StorytimePanelNavigation;
