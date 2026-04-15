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

$has_non_empty_attributes = ! empty(
    array_filter(
        $attributes,
        static function ( $value ) {
            if ( is_string( $value ) ) {
                return trim( $value ) !== '';
            }
            return ! empty( $value );
        }
    )
);

if ( ! $has_non_empty_attributes ) {
    return;
}
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-hero w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="max-w-wp-wide ml-auto mr-auto flex flex-col md:flex-row justify-between items-stretch gap-8">

		<?php
			$content_container_width = (isset( $attributes['imageURL'] ) && $attributes['imageURL'] ) ? 'md:w-[50%]' : 'md:w-[60%]';
		?>

		<div class="self-center w-full <?php echo esc_attr( $content_container_width ); ?>">
			<?php
				$parent_id = wp_get_post_parent_id( get_the_ID() );

				if ( $parent_id ) :
					?>
					<p class="!text-white uppercase"><?php echo esc_html( get_the_title( $parent_id ) ); ?></p>
					<?php
				endif;

				if ( isset( $attributes['title'] ) && $attributes['title'] ) :
					?>
					<h1 class="!text-white has-hero-heading-font-size mb-0"><?php echo esc_html( $attributes['title'] ); ?></h1>
					<?php
				endif;

				if ( isset( $attributes['body'] ) && $attributes['body'] ) :
					?>
					<p class="text-white has-hero-text-font-size !mb-0 mt-4"><?php echo esc_html( $attributes['body'] ); ?></p>
					<?php
				endif;
			?>
		</div>

		<?php if ( isset( $attributes['imageURL'] ) && $attributes['imageURL'] ) : ?>
			<div class="relative w-full md:w-[50%]">
				<img
					class="w-full h-full object-cover rounded-2xl object-center aspect-6/4"
					src="<?php echo esc_url( $attributes['imageURL'] ); ?>"
					alt=""
				/>
			</div>
		<?php endif; ?>

	</div>
</div>
