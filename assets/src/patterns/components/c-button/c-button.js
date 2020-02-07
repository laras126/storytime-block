export default function cButton( props ) {
	return <button className={ 'c-button ' + props.c_button_classes }>{ props.c_button_text }</button>;
}