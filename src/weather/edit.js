import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ServerSideRender } from '@wordpress/editor';
import { PanelBody, TextControl, Notice } from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { placeName, latitude, longitude, apiKey } = attributes;
	const hasApiKey = apiKey.trim() !== '';

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-weather w-full max-w-full pl-gutter pr-gutter' }) }>
			<div class="tnc-block-inner tnc-block-content max-w-wp-content ml-auto mr-auto flex flex-col items-center justify-center">

				<InspectorControls>
					<PanelBody title={__('Weather Settings', 'tnc-blocks')} initialOpen={true}>
						<TextControl
							label={__('Place Name', 'tnc-blocks')}
							value={placeName}
							onChange={(value) => setAttributes({ placeName: value })}
						/>
						<TextControl
							label={__('Latitude', 'tnc-blocks')}
							value={latitude}
							onChange={(value) => setAttributes({ latitude: value })}
						/>
						<TextControl
							label={__('Longitude', 'tnc-blocks')}
							value={longitude}
							onChange={(value) => setAttributes({ longitude: value })}
						/>
						<TextControl
							label={__('API Key', 'tnc-blocks')}
							value={apiKey}
							onChange={(value) => setAttributes({ apiKey: value })}
						/>
					</PanelBody>
				</InspectorControls>

				{ ! hasApiKey ? (
					<Notice status="warning" isDismissible={ false }>
						{ __( 'Please enter an API key.', 'tnc' ) }
					</Notice>
				) : (
					<ServerSideRender
						block="tnc/weather"
						attributes={ attributes }
					/>
				) }
			</div>
		</div>
	);
}
