import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';
// Comes from localized data
// const panelData = JSON.parse( modules.panel );

const ALLOWED_BLOCKS = [ 'storytime/panel' ];

class Storytime extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <div className={ 'lrv-u-border-a-1 lrv-u-padding-a-1' }>
			<p>storytime block</p>
			<InnerBlocks 
				allowedBlocks={ ALLOWED_BLOCKS }
			/>
			<InspectorControls>
				<PanelBody>
					Main Storytime
				</PanelBody>
			</InspectorControls>
		</div>
	}
}

export default Storytime;