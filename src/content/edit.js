import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-content w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="max-w-wp-content ml-auto mr-auto">
				<div className="prose max-w-none">
					<InnerBlocks
						allowedBlocks={[
							'core/heading',
							'core/paragraph',
							'core/list',
							'core/list-item',
							'core/image',
							'core/embed',
							'core/shortcode'
						]}
						templateLock={false}
					/>
				</div>

			</div>
		</div>
	);
}
