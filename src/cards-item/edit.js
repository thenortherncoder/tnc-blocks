import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, InspectorControls, RichText, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, Popover, ComboboxControl, PanelBody } from '@wordpress/components';
import { Icon, link } from '@wordpress/icons';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { title, text, icon, buttonLabel, buttonUrl } = attributes;
	const [ isLinkPickerOpen, setIsLinkPickerOpen ] = useState( false );

	const iconOptions = [
		{ value: 'assignment', label: 'Assignment' },
		{ value: 'pedal_bike', label: 'Bike' },
		{ value: 'delete', label: 'Bin' },
		{ value: 'book_5', label: 'Book' },
		{ value: 'calendar_month', label: 'Calendar' },
		{ value: 'nest_cam_iq_outdoor', label: 'CCTV' },
		{ value: 'directions_car', label: 'Car' },
		{ value: 'parking_sign', label: 'Car Parking Sign' },
		{ value: 'charger', label: 'Charger' },
		{ value: 'computer', label: 'Computer' },
		{ value: 'currency_pound', label: 'Currency (Pound)' },
		{ value: 'devices', label: 'Devices' },
		{ value: 'diversity_3', label: 'Diversity' },
		{ value: 'alternate_email', label: 'Email' },
		{ value: 'event', label: 'Event' },
		{ value: 'family_group', label: 'Family' },
		{ value: 'festival', label: 'Festival' },
		{ value: 'finance', label: 'Finance graph' },
		{ value: 'forest', label: 'Forest' },
		{ value: 'local_florist', label: 'Flower' },
		{ value: 'food_bank', label: 'Food bank' },
		{ value: 'groups', label: 'Group of people' },
		{ value: 'favorite', label: 'Heart' },
		{ value: 'heat', label: 'Heat' },
		{ value: 'help', label: 'Help' },
		{ value: 'history', label: 'History' },
		{ value: 'house', label: 'House' },
		{ value: 'info', label: 'Info' },
		{ value: 'eco', label: 'Leaf' },
		{ value: 'lightbulb', label: 'Lightbulb' },
		{ value: 'campaign', label: 'Loud speaker' },
		{ value: 'mail', label: 'Mail' },
		{ value: 'mobile', label: 'Mobile phone' },
		{ value: 'museum', label: 'Museum' },
		{ value: 'news', label: 'News' },
		{ value: 'newspaper', label: 'Newspaper' },
		{ value: 'local_gas_station', label: 'Petrol' },
		{ value: 'nature_people', label: 'Park' },
		{ value: 'playground', label: 'Playground' },
		{ value: 'call', label: 'Phone' },
		{ value: 'travel', label: 'Plane' },
		{ value: 'road', label: 'Road' },
		{ value: 'school', label: 'School' },
		{ value: 'shopping_bag', label: 'Shopping Bag' },
		{ value: 'store', label: 'Store' },
		{ value: 'train', label: 'Train' },
		{ value: 'nature', label: 'Tree (Round)' },
		{ value: 'park', label: 'Tree (Triangle)' },
		{ value: 'video_template', label: 'Video' }
	];

	return (
		<div { ...useBlockProps({ className: 'bg-white p-6 rounded-lg flex flex-col items-center justify-between text-center' }) }>

			<InspectorControls>
				<PanelBody title={__('Icon Settings', 'tnc-blocks')} initialOpen={true}>
					<ComboboxControl
						label="Icon"
						value={ icon }
						options={ iconOptions }
						onChange={ (icon) => setAttributes({ icon }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div>
				<span class="material-symbols-outlined text-4xl!">{icon}</span>

				<RichText
					tagName='h3'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={title}
					onChange={(title) => setAttributes({ title: title })}
					placeholder='Enter title...'
					className='mb-0'
				/>

				<RichText
					tagName='p'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={text}
					onChange={(text) => setAttributes({ text: text })}
					placeholder='Enter text...'
					className='mb-0! mt-4'
				/>
			</div>

			<BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        icon={ link }
                        label={ __( 'Set button link', 'tnc-blocks' ) }
                        onClick={ () => setIsLinkPickerOpen( (open) => !open ) }
                        isPressed={ isLinkPickerOpen }
                    />
                </ToolbarGroup>
            </BlockControls>

			{ isLinkPickerOpen && (
                <Popover position="bottom center" onClose={ () => setIsLinkPickerOpen( false ) }>
                    <LinkControl
                        value={ { url: buttonUrl || '' } }
                        onChange={ ( next ) => setAttributes( { buttonUrl: next?.url || '' } ) }
                    />
                </Popover>
            ) }

			<div className="wp-block-button mt-4">
				<RichText
					tagName='a'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={buttonLabel}
					onChange={(buttonLabel) => setAttributes({ buttonLabel: buttonLabel })}
					onClick={ ( e ) => e.preventDefault() }
					placeholder='Enter button label...'
					className='wp-block-button__link wp-element-button'
				/>
			</div>

		</div>
	);
}
