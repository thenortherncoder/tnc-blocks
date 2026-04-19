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
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-accordion w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-accordion-inner max-w-wp-content ml-auto mr-auto">

		<?php
			if ( isset( $attributes['title'] ) && $attributes['title'] ) :
				?>
				<h2 class="mb-8"><?php echo esc_html( $attributes['title'] ); ?></h2>
				<?php
			endif;
		?>

		<?php echo $content; ?>

	</div>
</div>
