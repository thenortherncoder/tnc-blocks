<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-profile-cards w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-block-inner max-w-wp-wide ml-auto mr-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

		<?php echo $content; ?>

	</div>
</div>
