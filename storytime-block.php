<?php
/*
Plugin Name: Storytime Block
*/

define( 'PLUGIN_PATH', __DIR__ );

function render_template( $template_path, $obj = [], $echo = false ) {
	extract( $obj, EXTR_SKIP );

	ob_start();

	require $template_path;

	if ( true === $echo ) {
		echo ob_get_clean();
	} else {
		return ob_get_clean();
	}

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

	register_block_type( 'storytime/panel', array(
		'editor_script'   => 'storytime',
		'editor_style'    => 'editor-larva',
		'render_callback' => 'storytime_panel_render_callback'
	) );

	function storytime_panel_render_callback( $attributes, $content ) {
		$json = file_get_contents( plugin_dir_path( __FILE__ ) . 'assets/build/json/modules/panel.prototype.json' );
		$obj = json_decode( $json , true );

		$obj['panel_markup'] = $content;

		// // Set up button data and base obj
		// $panel_button_data   = $attributes['buttons'];
		// $panel_button_struct = $obj['panel_buttons'][0];

		// // Clear the demo data
		// $obj['panel_buttons'] = [];

		// // Merge button data with button pattern objs
		// foreach ( $panel_button_data as $button_data ) {
		// 	$new_panel_button = $panel_button_struct;
		// 	$new_panel_button['c_button_text'] = $button_data['text'];
		// 	array_push( $obj['panel_buttons'], $new_panel_button );
		// }

		$tmpl = plugin_dir_path( __FILE__ ) . 'template-parts/patterns/modules/panel.php';

		return render_template( $tmpl, $obj );
	}

}
add_action( 'init', 'storytime_register_block' );