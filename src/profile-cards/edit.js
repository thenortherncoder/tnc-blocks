import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-profile-cards w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="max-w-wp-wide ml-auto mr-auto">
				<InnerBlocks
					allowedBlocks={[
						'tnc/profile-card'
					]}
					templateLock={false}
					orientation="horizontal"
					template={[
						['tnc/profile-card'],
						['tnc/profile-card'],
						['tnc/profile-card']
					]}
				/>
			</div>
		</div>
	);
}
