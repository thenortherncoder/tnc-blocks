import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Icon, trash } from '@wordpress/icons';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { title, body, imageURL, imageID } = attributes;

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

	const content_container_width = imageURL ? 'md:w-[50%]' : 'md:w-[60%]';

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-hero w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-block-inner max-w-wp-wide ml-auto mr-auto flex flex-col md:flex-row justify-between items-stretch gap-8">

				<div className={`tnc-block-content self-center w-full ${content_container_width}`}>
					<RichText
						tagName='h1'
						withoutInteractiveFormatting={true}
						allowedFormats={[]}
						value={attributes.title}
						onChange={(title) => setAttributes({ title: title })}
						placeholder='Enter a title...'
						className='text-white! has-hero-heading-font-size mb-4'
					/>

					<RichText
						tagName='p'
						withoutInteractiveFormatting={true}
						allowedFormats={[]}
						value={attributes.body}
						onChange={(body) => setAttributes({ body: body })}
						placeholder='Enter body text...'
						className='text-white has-hero-text-font-size mb-0!'
					/>
				</div>

				<div className='relative w-full md:w-[50%]'>
					{ imageURL ? (
						<>
							<img
								src={ imageURL }
								alt={ __( 'image', 'tnc' ) }
								className="w-full h-full object-cover rounded-2xl object-center aspect-6/4"
							/>
							<Button
								className='absolute top-4 left-4 bg-white! rounded cursor-pointer z-10 !p-1 !min-w-0 !h-auto'
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
				</div>

			</div>
		</div>
	);
}
