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

$key = 'tnc-weather-' . $attributes['latitude'] . '-' . $attributes['longitude'];

if ( false === ( get_transient( $key ) ) ) :
	$response = wp_remote_get( sprintf(
		'https://weather.googleapis.com/v1/currentConditions:lookup?key=%s&location.latitude=%s&location.longitude=%s',
		$attributes['apiKey'],
		$attributes['latitude'],
		$attributes['longitude']
	) );

	if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
        return 'Please enter an API key';
    }

	$weather_data = json_decode( wp_remote_retrieve_body( $response ), true );
    set_transient( $key, $weather_data, 15 * MINUTE_IN_SECONDS );
else:
	$weather_data = get_transient( $key );
endif;

$icon_url = $weather_data['weatherCondition']['iconBaseUri'];
?>

<div <?php echo get_block_wrapper_attributes([ 'class' => 'tnc-block tnc-weather w-full max-w-full pl-gutter pr-gutter' ]); ?>>
	<div class="tnc-block-inner tnc-block-content max-w-wp-content ml-auto mr-auto flex flex-col items-center justify-center">

		<div class="relative">

			<div class="z-2 flex flex-col items-center">
				<?php
					if ( $icon_url ) :
						?>
						<img src="<?php echo esc_url( $icon_url ); ?>.png" class="mb-3 w-[32px]" alt="Weather icon, it's <?php echo esc_attr( $weather_data['weatherCondition']['description']['text'] ); ?>" />
						<?php
					endif;
				?>

				<h3><?php echo $attributes['placeName']; ?></h3>

				<?php
					if ( isset( $weather_data['precipitation']['probability']['percent'] ) && isset( $weather_data['precipitation']['probability']['type'] ) ) :
						?>
						<span class="block mb-2">
							<?php
								echo esc_html( $weather_data['precipitation']['probability']['percent'] ) . '% ';
								echo "chance of " . strtolower($weather_data['precipitation']['probability']['type']);
							?>
						</span>
						<?php
					endif;

					if ( isset( $weather_data['weatherCondition']['description']['text'] ) ) :
						?>
						<span>
							<?php echo esc_html( $weather_data['weatherCondition']['description']['text'] ); ?>
						</span>
						<?php
					endif;

					if ( isset( $weather_data['temperature']['degrees'] ) ) :
						?>
						<span class="block text-7xl leading-[1] mb-0!">
							<?php echo esc_html( explode('.', $weather_data['temperature']['degrees'] )[0] ) . '°C'; ?>
						</span>
						<?php
					endif;
				?>
			</div>

		</div>

	</div>
</div>
