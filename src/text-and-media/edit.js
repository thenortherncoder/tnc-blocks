import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Icon, trash } from '@wordpress/icons';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { title, text, imageID, imageURL } = attributes;

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
		<div { ...useBlockProps({ className: 'tnc-block tnc-text-and-media w-full max-w-full pl-gutter pr-gutter' }) }>
			<div class="tnc-block-inner max-w-wp-wide ml-auto mr-auto grid sm:grid-cols-2 gap-8">

				<div className="relative">
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

				<div className="tnc-block-content self-center">
					<RichText
						tagName='h2'
						withoutInteractiveFormatting={true}
						multiline={false}
						allowedFormats={[]}
						value={title}
						onChange={(title) => setAttributes({ title: title })}
						placeholder={__('Enter title...', 'tnc')}
						className='mb-4!'
					/>

					<RichText
						tagName='p'
						allowedFormats={[ 'core/link' ]}
						value={text}
						onChange={(text) => setAttributes({ text: text })}
						placeholder={__('Enter text...', 'tnc')}
						className='mb-0!'
					/>
				</div>

			</div>
		</div>
	);
}
