<?php
/*
Plugin Name: Storytime Block
*/
function storytime_register_block() {
 
	// automatically load dependencies and version
	// TODO:
	// $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
	wp_register_script(
		'storytime',
		plugins_url( 'build/block.js', __FILE__ ),
		[
			
		],
		'0.1'
		// TODO:
		// $asset_file['dependencies'],
		// $asset_file['version']
	);
 
	register_block_type( 'storytime/panel', array(
		'editor_script' => 'storytime',
	) );
 
}
add_action( 'init', 'storytime_register_block' );