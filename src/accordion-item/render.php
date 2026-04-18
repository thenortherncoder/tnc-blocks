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

<details <?php echo get_block_wrapper_attributes([ 'class' => 'bg-neutral-light rounded-lg mb-4 hover:cursor-pointer open:[&_svg]:rotate-45' ]); ?>>
	<summary class="w-full flex justify-between p-6 items-center">
		<h3><?php echo $attributes['summary']; ?></h3>

		<svg class="transition-wp duration-wp min-w-10 ml-10" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
			<circle cx="20" cy="20" r="20" fill="white"/>
			<path
				d="M20 12V28M12 20H28"
				stroke="#1B5E3C"
				stroke-width="4"
				stroke-linecap="round"
			/>
		</svg>
	</summary>
	<div class="tnc-accordion-content p-6 pt-0">
		<?php echo $content; ?>
	</div>
</details>
