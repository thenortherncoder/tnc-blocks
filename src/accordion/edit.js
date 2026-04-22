import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import './editor.css';

export default function Edit({ context, attributes, setAttributes }) {

	const { title } = attributes;
	const isNested = context['tnc/isNested'];

    const blockProps = useBlockProps({
        className: `tnc-block tnc-accordion w-full max-w-full ${isNested ? 'mb-6' : 'pl-gutter pr-gutter'}`
    });

	return (
		<div { ...blockProps }>
			<div className="tnc-block-inner tnc-block-content max-w-wp-content ml-auto mr-auto">
				<RichText
					tagName='h2'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={title}
					onChange={(title) => setAttributes({ title: title })}
					placeholder={__('Enter a title...', 'tnc')}
					className='mb-8'
				/>
				<InnerBlocks
					allowedBlocks={[
						'tnc-blocks/accordion-item'
					]}
					templateLock={false}
					template={[
						['tnc/accordion-item']
					]}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</div>
	);
}
