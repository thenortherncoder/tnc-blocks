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

$image_id = isset( $attributes['imageID'] ) ? (int) $attributes['imageID'] : 0;
$post_has_parent = wp_get_post_parent_id( get_the_ID() );

$resolved_title = isset( $attributes['title'] ) && $attributes['title']
	? (string) $attributes['title']
	: ( is_archive() ? (string) get_the_archive_title() : (string) get_the_title() );

$resolved_title = trim( wp_strip_all_tags( $resolved_title ) );

$resolved_body = isset( $attributes['body'] ) && $attributes['body']
	? (string) $attributes['body']
	// : ( is_archive() ? (string) get_the_archive_description() : '' );
	: '';

$resolved_body  = trim( wp_strip_all_tags( $resolved_body ) );

if (get_option('page_for_posts') && is_home()) :
	$parent_id = get_option('page_for_posts');
	$resolved_title = get_the_title($parent_id);
endif;

$content_container_width = (isset( $attributes['imageID'] ) && $attributes['imageID'] ) ? 'md:w-[50%]' : 'md:w-[60%]';
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-hero w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-block-inner max-w-wp-wide ml-auto mr-auto flex flex-col md:flex-row justify-between items-stretch gap-8">

		<div class="tnc-block-content self-center w-full <?php echo esc_attr( $content_container_width ); ?>">
			<?php
				if ( $post_has_parent ) :
					?>
					<p class="text-white! uppercase"><?php echo esc_html( get_the_title( $post_has_parent ) ); ?></p>
					<?php
				endif;

				if ( $resolved_title ) :
					?>
					<h1 class="text-white! has-hero-heading-font-size mb-0"><?php echo esc_html( $resolved_title ); ?></h1>
					<?php
				endif;

				if ( $resolved_body ) :
					?>
					<p class="text-white! has-hero-text-font-size mb-0! mt-4"><?php echo esc_html( $resolved_body ); ?></p>
					<?php
				endif;
			?>
		</div>

		<?php if ( isset( $image_id ) && $image_id ) : ?>
			<div class="relative w-full md:w-[50%]">
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

	</div>
</div>
