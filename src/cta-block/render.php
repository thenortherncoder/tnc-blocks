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

$is_nested = isset($block->context['tnc/isNested']) && $block->context['tnc/isNested'];

$padding_class = $is_nested ? 'mb-6' : 'pl-gutter pr-gutter';
$wrapper_classes = 'tnc-block tnc-cta-block w-full max-w-full ' . $padding_class;

$margin_class = $is_nested ? '' : 'ml-auto mr-auto';
$inner_classes = 'tnc-block-inner tnc-block-content max-w-wp-content has-green-light-background-color rounded-lg p-8 flex flex-col md:flex-row gap-8 md:items-center ' . $margin_class;
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => $wrapper_classes ]); ?>>
	<div class="<?php echo esc_attr( $inner_classes ); ?>">

		<div>
			<?php
				if ( isset( $attributes['title'] ) && $attributes['title'] ) :
					?>
					<h3 class="mb-4"><?php echo esc_html( $attributes['title'] ); ?></h3>
					<?php
				endif;

				if ( isset( $attributes['text'] ) && $attributes['text'] ) :
					?>
					<p class="mb-0!"><?php echo esc_html( $attributes['text'] ); ?></p>
					<?php
				endif;
			?>
		</div>

		<?php
			if ( isset( $attributes['buttonLabel'] ) && $attributes['buttonLabel'] && isset( $attributes['buttonUrl'] ) && $attributes['buttonUrl'] ) :
				$button_url = $attributes['buttonUrl'];
				if ( strpos( $button_url, 'mailto:' ) !== 0 ) {
					$button_url = 'mailto:' . ltrim( preg_replace( '#^https?://#', '', $button_url ) );
				}
				?>
				<div class="wp-block-button shrink-0">
					<a href="<?php echo esc_url( $button_url ); ?>" class="wp-block-button__link wp-element-button inline-flex"><?php echo esc_html( $attributes['buttonLabel'] ); ?></a>
				</div>
				<?php
			endif;
		?>
	</div>
</div>
