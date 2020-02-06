import { Fragment } from '@wordpress/element';
import cButton from '../../components/c-button/c-button.js';

export default function Panel( props ) {
	return <Fragment>
		<section className={ 'panel // js-Panel ' + props.panel_classes }>

			{ props.panel_markup }

			<nav class="js-Panel-nav">
				{
					props.panel_buttons.map( item => {
						return cButton( item );
					})
				}
			</nav>

		</section>
	</Fragment>;
}