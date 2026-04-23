import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.css';

export default function Edit({ attributes, setAttributes, context }) {

	const { title, columnCount } = attributes;
	const isNested = context['tnc/isNested'];

	const gridMap = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
    };

	const blockProps = useBlockProps({
		className: `tnc-block tnc-cards w-full max-w-full ${isNested ? 'mb-6' : 'pl-gutter pr-gutter'}`
	});

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `grid gap-8 sm:grid-cols-2 ${gridMap[columnCount]}`
		},
		{
			allowedBlocks: ['tnc/cards-item'],
			templateLock: false,
			template: [
				['tnc/cards-item'],
				['tnc/cards-item'],
				['tnc/cards-item']
			],
			renderAppender: InnerBlocks.ButtonBlockAppender
		}
	);

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

				<div { ...innerBlocksProps } />

				<InspectorControls>
					<PanelBody title={__('Columns', 'tnc')}>
						<RangeControl
							label={__('Number of columns', 'tnc')}
							value={columnCount}
							onChange={(value) => setAttributes({ columnCount: value })}
							min={1}
							max={5}
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		</div>
	);
}
