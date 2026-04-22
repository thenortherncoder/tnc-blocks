import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { ALLOWED_BLOCKS } from '../utils/allowed-blocks';
import './editor.css';

export default function Edit() {

	const TEMPLATE = [
        ['core/paragraph', { placeholder: 'Start typing your content...' }],
    ];

	const ALLOWED_BLOCKS_TNC = [
		'tnc/accordion',
		'tnc/weather'
	]

	ALLOWED_BLOCKS.push(...ALLOWED_BLOCKS_TNC);

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-content w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-block-inner tnc-block-content max-w-wp-content ml-auto mr-auto">
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					templateLock={false}
					template={TEMPLATE}
					renderAppender={InnerBlocks.ButtonBlockAppender}
				/>
			</div>
		</div>
	);
}
