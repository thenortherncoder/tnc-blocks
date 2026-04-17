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

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-split-content w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-split-content-inner max-w-wp-wide ml-auto mr-auto grid sm:grid-cols-[1fr_2fr] gap-8 lg:gap-12">

		<?php
			if ( isset( $attributes['title'] ) && $attributes['title'] ) :
				?>
				<h2 class="mb-0"><?php echo esc_html( $attributes['title'] ); ?></h2>
				<?php
			endif;
		?>

		<div class="tnc-split-content__content">
			<?php echo $content; ?>
		</div>

	</div>
</div>
