<?php
/**
 * Plugin Name:       TNC Blocks
 * Description:       A set of custom blocks.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The Northern Coder
 * Author URI:        https://thenortherncoder.co.uk
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       tnc-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
 * based on the registered block metadata. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */

/**
 * Block initialization.
 */
add_action( 'init', 'tnc_tnc_blocks_init' );

function tnc_tnc_blocks_init() {
	$block_directories = glob(__DIR__ . "/build/*", GLOB_ONLYDIR);

	wp_register_style(
        'tnc-material-symbols',
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        [],
        null
    );

	foreach ( $block_directories as $block ) {
		register_block_type( $block );
	}
}

/**
 * Enqueue block editor assets.
 */
add_action( 'init', function() {
    wp_register_style(
        'tnc-material-symbols',
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        [],
        null
    );
} );

/**
 * Enqueue block assets.
 */
add_filter( 'render_block_tnc/cards', function( $block_content, $block ) {
    wp_enqueue_style( 'tnc-material-symbols' );
    return $block_content;
}, 10, 2 );

add_action( 'enqueue_block_assets', function() {
    wp_enqueue_style( 'tnc-material-symbols' );
} );


/**
 * Custom block category.
 */
add_filter( 'block_categories_all', 'tnc_custom_block_category', 10, 2 );

function tnc_custom_block_category( $categories, $post ) {
    return array_merge(
        array(
            array(
                'slug' => 'tnc-blocks',
                'title' => 'TNC Blocks',
            ),
        ),
        $categories
    );
}
