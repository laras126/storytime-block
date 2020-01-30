export default function Panel( props ) {
    return <section className={ 'panel // js-Panel ' + props.panel_classes }>    
        { props.panel_markup }
    </section>;
}