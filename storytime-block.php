<?php
/*
Plugin Name: Storytime Block
*/


function render( $template_path, $obj = [] ) {
	extract( $obj, EXTR_SKIP );

	ob_start();
	require $template_path;
	return ob_get_clean();
}

function storytime_register_block() {
	$json = file_get_contents( plugin_dir_path( __FILE__ ) . 'assets/build/json/modules/panel.prototype.json' );
 
	// automatically load dependencies and version
	// TODO:
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'assets/build/index.asset.php');
 
	wp_register_script(
		'storytime',
		plugins_url( 'assets/build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	
	wp_register_style(
		'editor-larva',
		get_template_directory_uri() . '/larva/build/css/larva.css',
		$asset_file['version']
	);

    $localize_modules = array(
		'panel' => $json,
	);

	wp_localize_script( 'storytime', 'modules', $localize_modules );

	register_block_type( 'storytime/storytime', array(
		'editor_script'   => 'storytime',
		'editor_style'    => 'editor-larva',
		'render_callback' => 'storytime_panel_render_callback'
	) );

	function storytime_panel_render_callback( $attributes, $content ) {
        $json = file_get_contents( plugin_dir_path( __FILE__ ) . 'assets/build/json/modules/panel.prototype.json' );

		$obj = json_decode( $json , true );

		$obj['panel_markup'] = $content;
        $tmpl = plugin_dir_path( __FILE__ ) . 'template-parts/patterns/modules/panel.php';

		return render( $tmpl, $obj );
	}

}
add_action( 'init', 'storytime_register_block' );