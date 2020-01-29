import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

const CONTENT_TEMPLATE = [
	[ 'core/heading', { 
		text: 'Panel Title' 
	} ],
	[ 'core/paragraph', { 
        placeholder: 'Some panel text for the story', 
    } ],
];

const ALLOWED_BLOCKS = [
    'core/paragraph',
    'core/image',
    'core/columns'
];

class StorytimePanelContent extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <div>
			<InnerBlocks
				template={ CONTENT_TEMPLATE }
				allowedBlocks= { ALLOWED_BLOCKS }
				templateLock={ false }
			/>
			<InspectorControls>
				<PanelBody>
					Storytime Panel Content woot woot
				</PanelBody>
			</InspectorControls>
		</div>
	}
}

export default StorytimePanelContent;

