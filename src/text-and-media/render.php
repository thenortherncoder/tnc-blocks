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
$image_id = isset( $attributes['imageID'] ) ? (int) $attributes['imageID'] : 0;
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-text-and-media w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-block-inner max-w-wp-wide ml-auto mr-auto grid sm:grid-cols-2 gap-8">

		<?php if ( isset( $image_id ) && $image_id ) : ?>
			<div class="">
				<?php
					echo wp_get_attachment_image(
						$image_id,
						'card-medium',
						false,
						[
							'class' => 'w-full h-full object-cover rounded-2xl object-center aspect-6/4',
							'alt'   => '',
						]
					);
				?>
			</div>
		<?php endif; ?>

		<div class="tnc-block-content self-center">
			<?php
				if ( isset( $attributes['title'] ) && $attributes['title'] ) :
					?>
					<h2 class="mb-4 has-text-and-media-heading-font-size"><?php echo esc_html( $attributes['title'] ); ?></h2>
					<?php
				endif;

				if ( isset( $attributes['text'] ) && $attributes['text'] ) :
					?>
					<p class="mb-0 has-text-and-media-text-font-size"><?php echo wp_kses_post( $attributes['text'] ); ?></p>
					<?php
				endif;
			?>
		</div>

	</div>
</div>
