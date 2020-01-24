import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

const CONTENT_TEMPLATE = [
    [ 'core/heading', { placeholder: 'Panel Title' } ],
    [ 'core/paragraph', { placeholder: 'Some panel text for the story' } ],
];

class StorytimePanelContent extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <div>
		<p>panel content</p>
		<InspectorControls>
			<PanelBody>
				Storytime Panel Content woot woot
			</PanelBody>
		</InspectorControls>
	</div>
	}
}

export default StorytimePanelContent;

