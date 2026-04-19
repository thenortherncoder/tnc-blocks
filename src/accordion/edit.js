import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { title } = attributes;

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-accordion w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-accordion-inner max-w-wp-content ml-auto mr-auto">

				<RichText
					tagName='h2'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={title}
					onChange={(title) => setAttributes({ title: title.replace(/<[^>]*>/g, '') })}
					placeholder={__('Enter a title...', 'tnc')}
					className='mb-8'
				/>

				<InnerBlocks
					allowedBlocks={['tnc-blocks/accordion-item']}
					templateLock={false}
					template={[
						['tnc/accordion-item']
					]}
				/>
			</div>
		</div>
	);
}
