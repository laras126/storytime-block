import { InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

// Comes from localized data
const panelData = JSON.parse( modules.panel );

const ALLOWED_BLOCKS = [ 'storytime/panel' ];

class Storytime extends Component {

	constructor() {
		super( ...arguments )
	}

	render() {
		return <div className={ panelData.panel_classes }>
			<h2>Main storytune block</h2>
		{/* <InnerBlocks
			allowedBlocks={ ALLOWED_BLOCKS }
		/> */}
		<InspectorControls>
			<PanelBody>
				Main Storytime
			</PanelBody>
		</InspectorControls>
	</div>
	}
}

export default Storytime;

