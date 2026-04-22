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
$wrapper_classes = 'tnc-block tnc-cards w-full max-w-full ' . $padding_class;

$margin_class = $is_nested ? '' : 'ml-auto mr-auto';
$inner_classes = 'tnc-block-inner tnc-block-cards max-w-wp-content ' . $margin_class;
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => $wrapper_classes ]); ?>>
	<div class="<?php echo esc_attr( $inner_classes ); ?>">
		<?php
			if ( isset( $attributes['title'] ) && $attributes['title'] ) :
				?>
				<h2 class="mb-8"><?php echo esc_html( $attributes['title'] ); ?></h2>
				<?php
			endif;
		?>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
			<?php
				echo $content;
			?>
		</div>
	</div>
</div>
