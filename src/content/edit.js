import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-content w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-content-inner max-w-wp-content ml-auto mr-auto">
				<InnerBlocks
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
					]}
					templateLock={false}
				/>
			</div>
		</div>
	);
}
