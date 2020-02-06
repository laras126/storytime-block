const clonedeep = require( 'lodash.clonedeep' );
const c_button = clonedeep( require( '@penskemediacorp/larva-patterns/components/c-button/c-button.brand-basic' ) );
const c_button_second = clonedeep( c_button );

c_button.c_button_text = 'Ask Marcella A Question';
c_button_second.c_button_text = 'See Another Monster';

const panel_buttons = [
	c_button,
	c_button_second
]

module.exports = {
    panel_classes: 'lrv-u-padding-a-2 lrv-u-border-a-1',
    panel_markup: '<h2>Say hello to Marcella</h2><figure class="wp-block-image size-large"><img data-src="http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-1200x892.jpeg" alt="Purple monster waving" class="wp-image-6829 lazy-load is-loaded" srcset="http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-1200x892.jpeg 1200w, http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-400x297.jpeg 400w, http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-600x446.jpeg 600w, http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-768x571.jpeg 768w, http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9.jpeg 1821w" sizes="(max-width: 1200px) 100vw, 1200px" src="http://nl.local/wp-content/uploads/2019/11/BD4D20C9-9839-43A3-AA2F-CC7CC2F18CC9-1200x892.jpeg" data-loaded="true"></figure><p>Marcella is a sweet monster!</p>',
	is_nested: false,
	panel_buttons: panel_buttons
}