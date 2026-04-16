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

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
		if ( isset( $attributes['imageURL'] ) && $attributes['imageURL'] ) :
			?>
			<img
				class="object-cover rounded-2xl object-center aspect-6/4 mb-4"
				src="<?php echo esc_url( $attributes['imageURL'] ); ?>"
				alt=""
			/>
			<?php
		else :
			?>
			<div class="w-full bg-gray-200 rounded-2xl aspect-6/4 mb-4"></div>
			<?php
		endif;

		if ( isset( $attributes['name'] ) && $attributes['name'] ) :
			?>
			<h2 class="mb-0"><?php echo esc_html( $attributes['name'] ); ?></h2>
			<?php
		endif;

		if ( isset( $attributes['address'] ) && $attributes['address'] ) :
			?>
			<p class="mb-0 mt-4!"><?php echo esc_html( $attributes['address'] ); ?></p>
			<?php
		endif;

		if ( isset( $attributes['telephone'] ) && $attributes['telephone'] ) :
			?>
			<p class="mb-0 mt-2!"><a href="tel:<?php echo esc_html( $attributes['telephone'] ); ?>"><?php echo esc_html( $attributes['telephone'] ); ?></a></p>
			<?php
		endif;

		if ( isset( $attributes['buttonLabel'] ) && $attributes['buttonLabel'] && isset( $attributes['buttonUrl'] ) && $attributes['buttonUrl'] ) :
			$button_url = $attributes['buttonUrl'];
			if ( strpos( $button_url, 'mailto:' ) !== 0 ) {
				$button_url = 'mailto:' . ltrim( preg_replace( '#^https?://#', '', $button_url ) );
			}
			?>
			<div class="wp-block-button mt-4">
				<a href="<?php echo esc_url( $button_url ); ?>" class="wp-block-button__link wp-element-button inline-flex"><?php echo esc_html( $attributes['buttonLabel'] ); ?></a>
			</div>
			<?php
		endif;
	?>
</div>
