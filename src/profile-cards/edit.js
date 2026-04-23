import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit() {

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
		},
		{
			allowedBlocks: ['tnc/profile-cards-item'],
			templateLock: false,
			template: [
				['tnc/profile-cards-item'],
						['tnc/profile-cards-item'],
						['tnc/profile-cards-item']
			],
			orientation: "horizontal",
			renderAppender: InnerBlocks.ButtonBlockAppender
		}
	);

	return (
		<div { ...useBlockProps({ className: 'tnc-block tnc-profile-cards w-full max-w-full pl-gutter pr-gutter' }) }>
			<div className="tnc-block-inner max-w-wp-wide ml-auto mr-auto">

				<div { ...innerBlocksProps } />

			</div>
		</div>
	);
}
