import { InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
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
		<RichText
			value={ 'hello' }
			tagName="h4"
			wrapperClassName="lrv-u-font-size-13"
			placeholder={ 'title here' }
			onChange={ title => setAttributes( { title } ) }
		/>
		<RichText
			value={ 'hello' }
			tagName="p"
			wrapperClassName="lrv-u-font-size-13"
			placeholder={ 'title here' }
			onChange={ title => setAttributes( { title } ) }
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

