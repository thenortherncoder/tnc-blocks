import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-profile-cards w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-block-inner max-w-wp-wide ml-auto mr-auto">
				<InnerBlocks
					allowedBlocks={[
						'tnc/profile-cards-item'
					]}
					templateLock={false}
					template={[
						['tnc/profile-cards-item'],
						['tnc/profile-cards-item'],
						['tnc/profile-cards-item']
					]}
					orientation="horizontal"
				/>
			</div>
		</div>
	);
}
