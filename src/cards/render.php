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
$width = isset( $attributes['columnCount'] ) && $attributes['columnCount'] > 3 ? 'wide' : 'content';

$padding_class = $is_nested ? 'mb-6' : 'pl-gutter pr-gutter';
$wrapper_classes = 'tnc-block tnc-cards w-full max-w-full ' . $padding_class;

$margin_class = $is_nested ? '' : 'ml-auto mr-auto';
$inner_classes = 'tnc-block-inner tnc-block-cards max-w-wp-' . $width . ' ' . $margin_class;

$gridMap = [
	1 => 'lg:grid-cols-1',
	2 => 'lg:grid-cols-2',
	3 => 'lg:grid-cols-3',
	4 => 'lg:grid-cols-4',
	5 => 'lg:grid-cols-4 xl:grid-cols-5',
];
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

		<div class="grid gap-8 sm:grid-cols-2 <?php echo isset( $attributes['columnCount'] ) ? esc_attr( $gridMap[ $attributes['columnCount'] ] ) : 'lg:grid-cols-3'; ?>">
			<?php
				echo $content;
			?>
		</div>
	</div>
</div>
