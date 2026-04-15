import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, MediaPlaceholder, BlockControls, __experimentalLinkControl as LinkControl, } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';
import { Icon, trash, link } from '@wordpress/icons';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { name, address, telephone, email, buttonLabel, buttonUrl, imageID, imageURL } = attributes;
	const [ isLinkPickerOpen, setIsLinkPickerOpen ] = useState( false );

	const onSelectImage = ( media ) => {
		setAttributes( {
			imageID: media?.id,
			imageURL: media?.url,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			imageID: null,
			imageURL: null
		} );
	};

	return (
		<div { ...useBlockProps() }>

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

			{ imageURL ? (
				<>
					<img
						src={ imageURL }
						alt={ __( 'image', 'tnc' ) }
						className="object-cover rounded-2xl object-center aspect-6/4 mb-4"
					/>
					<Button
						className='absolute top-4 left-4 !bg-white rounded cursor-pointer z-10 !p-1 !min-w-0 !h-auto'
						onClick={ onRemoveImage }
						label={ __( 'Remove image', 'tnc' ) }
					>
						<Icon size={20} icon={ trash } />
					</Button>
				</>
			) : (
				<MediaPlaceholder
					onSelect = { onSelectImage }
					allowedTypes = { [ 'image' ] }
					multiples = { false }
					labels = { { title: __( 'Select an image', 'tnc-blocks' ) } }
				/>
			)}

			<RichText
				tagName='h2'
				withoutInteractiveFormatting={true}
				multiline={false}
				allowedFormats={[]}
				value={name}
				onChange={(name) => setAttributes({ name: name.replace(/<[^>]*>/g, '') })}
				placeholder='Enter name...'
				className='mb-0'
			/>

			<RichText
				tagName='p'
				withoutInteractiveFormatting={true}
				multiline={false}
				allowedFormats={[]}
				value={address}
				onChange={(address) => setAttributes({ address: address.replace(/<[^>]*>/g, '') })}
				placeholder='Enter address...'
				className='!mb-0 mt-4'
			/>

			<p className="!mb-0 mt-4">
				<RichText
					tagName='a'
					withoutInteractiveFormatting={true}
					multiline={false}
					allowedFormats={[]}
					value={telephone}
					onChange={(telephone) => setAttributes({ telephone: telephone.replace(/<[^>]*>/g, '') })}
					placeholder='Enter telephone...'
					className='!mb-0 mt-4'
				/>
			</p>

			<div className="wp-block-button mt-4">
				<RichText
					tagName='a'
					withoutInteractiveFormatting={true}
					multiline={false}
					allowedFormats={[]}
					value={buttonLabel}
					onChange={(buttonLabel) => setAttributes({ buttonLabel: buttonLabel.replace(/<[^>]*>/g, '') })}
					onClick={ ( e ) => e.preventDefault() }
					placeholder='Enter button label...'
					className='wp-block-button__link wp-element-button'
				/>
			</div>

		</div>
	);
}
