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
$icon = isset( $attributes['icon'] ) ? sanitize_text_field( $attributes['icon'] ) : 'nature';
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'bg-white p-6 rounded-lg flex flex-col items-center justify-between text-center' ]); ?>>

	<div>
		<span class="material-symbols-outlined text-4xl!" aria-hidden="true"><?php echo esc_html( $icon ); ?></span>

		<?php
			if ( isset( $attributes['title'] ) && $attributes['title'] ) :
				?>
				<h3 class="mb-0"><?php echo esc_html( $attributes['title'] ); ?></h3>
				<?php
			endif;

			if ( isset( $attributes['text'] ) && $attributes['text'] ) :
				?>
				<p class="mb-0! mt-4"><?php echo esc_html( $attributes['text'] ); ?></p>
				<?php
			endif;
		?>
	</div>

	<?php
		if ( isset( $attributes['buttonLabel'] ) && $attributes['buttonLabel'] && isset( $attributes['buttonUrl'] ) && $attributes['buttonUrl'] ) :
			$button_url = $attributes['buttonUrl'];
			?>
			<div class="wp-block-button mt-4">
				<a href="<?php echo esc_url( $button_url ); ?>" class="wp-block-button__link wp-element-button inline-flex"><?php echo esc_html( $attributes['buttonLabel'] ); ?></a>
			</div>
			<?php
		endif;
	?>
</div>
