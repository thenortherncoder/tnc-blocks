<?php
/**
 * Plugin Name:       TNC Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.8
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
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

function tnc_tnc_blocks_init() {
	$block_directories = glob(__DIR__ . "/build/*", GLOB_ONLYDIR);

	foreach ( $block_directories as $block ) {
		register_block_type( $block );
	}
}
add_action( 'init', 'tnc_tnc_blocks_init' );

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

add_filter( 'block_categories_all', 'tnc_custom_block_category', 10, 2 );
