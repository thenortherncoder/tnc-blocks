import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-accordion w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-accordion-inner max-w-wp-content ml-auto mr-auto">
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
