import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls, __experimentalLinkControl as LinkControl, } from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';
import { Icon, trash, link } from '@wordpress/icons';
import './editor.css';

export default function Edit({ attributes, setAttributes, context }) {

	const { title, text, buttonLabel, buttonUrl } = attributes;
	const [ isLinkPickerOpen, setIsLinkPickerOpen ] = useState( false );
	const isNested = context['tnc/isNested'];

	const blockProps = useBlockProps({
		className: `tnc-block tnc-cta-block w-full max-w-full ${isNested ? 'mb-6' : 'pl-gutter pr-gutter'}`
	});

	return (
		<div { ...blockProps }>
			<div className="tnc-block-inner tnc-block-content max-w-wp-content has-green-light-background-color rounded-lg p-8 flex flex-col md:flex-row gap-8 md:items-center ml-auto mr-auto">
				<div>
					<RichText
						tagName='h3'
						withoutInteractiveFormatting={true}
						allowedFormats={[]}
						value={title}
						onChange={(title) => setAttributes({ title: title })}
						placeholder={__('Enter a title...', 'tnc')}
						className='mb-4'
					/>

					<RichText
						tagName='p'
						withoutInteractiveFormatting={true}
						allowedFormats={[]}
						value={text}
						onChange={(text) => setAttributes({ text: text })}
						placeholder={__('Enter some text...', 'tnc')}
						className='mb-0!'
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

				<div className="wp-block-button shrink-0">
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
		</div>
	);
}
