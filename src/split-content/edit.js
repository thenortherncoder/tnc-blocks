import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { title } = attributes;

	const TEMPLATE = [
        ['core/paragraph', { placeholder: 'Start typing your content...' }],
    ];

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-split-content w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-block-inner max-w-wp-wide ml-auto mr-auto grid sm:grid-cols-[1fr_2fr] gap-8 lg:gap-12">

				<RichText
					tagName='h2'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={title}
					onChange={(title) => setAttributes({ title: title })}
					placeholder='Enter title...'
					className='mb-0'
				/>

				<div className="tnc-block-content">
					<InnerBlocks
						template={TEMPLATE}
						allowedBlocks={[
							'core/heading',
							'core/paragraph',
							'core/list',
							'core/list-item',
							'core/image',
							'core/embed',
							'core/shortcode',
							'core/table',
							'core/buttons',
							'core/button',
							'tnc/accordion',
						]}
						templateLock={false}
					/>
				</div>
			</div>
		</div>
	);
}
