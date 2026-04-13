/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Icon, trash } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	const { title, body, imageURL, imageID } = attributes;

	return (
		<div { ...useBlockProps({ className: 'tnc-hero w-full max-w-full' }) }>
			<div className="tnc-hero-inner ml-auto mr-auto p-6 md:p-8 lg:p-16 flex flex-col md:flex-row justify-between items-stretch gap-8">

				<div className="self-center">
					<RichText
						tagName='h1'
						withoutInteractiveFormatting={true}
						multiline={false}
						allowedFormats={[]}
						value={attributes.title}
						onChange={(title) => setAttributes({ title: title.replace(/<[^>]*>/g, '') })}
						placeholder='Enter a title...'
						className='!text-white has-hero-heading-font-size mb-4'
					/>

					<RichText
						tagName='p'
						withoutInteractiveFormatting={true}
						multiline={false}
						allowedFormats={[]}
						value={attributes.body}
						onChange={(body) => setAttributes({ body: body.replace(/<[^>]*>/g, '') })}
						placeholder='Enter body text...'
						className='text-white has-hero-text-font-size !mb-0'
					/>
				</div>

				<div className="w-full lg:max-w-[50%] md:min-w-[50%] relative">
					{!!imageURL && !!imageID ? (
						<>
							<img
								src={ imageURL }
								alt={ __( 'image', 'tnc' ) }
								className="w-full h-full object-cover rounded-2xl object-center aspect-6/4"
							/>
							<Button
								className='absolute top-4 left-4 !bg-white rounded cursor-pointer z-10 !p-1 !min-w-0 !h-auto'
								onClick={ () => setAttributes( { imageID: null, imageURL: null } ) }
								label={ __( 'Remove image', 'tnc' ) }
							>
								<Icon size={20} icon={ trash } />
							</Button>
						</>
					) : (
						<MediaPlaceholder
							onSelect={
								( media ) => {
									setAttributes( {
										imageID: media.id,
										imageURL: media.url
									} )
								}
							}
							allowedTypes ={ [ 'image' ] }
							multiples = { false }
							labels = { { title: __( 'Pick an image', 'tnc' ) } }
						/>
					)}
				</div>

			</div>
		</div>
	);
}
