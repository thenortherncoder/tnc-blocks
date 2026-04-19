import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import './editor.css';

export default function Edit({ attributes, setAttributes }) {

	const { summary, content } = attributes;

	return (
		<details { ...useBlockProps({ className: 'tnc-accordion-item bg-neutral-light rounded-lg mb-4 hover:cursor-pointer open:[&_svg]:rotate-45' }) }>
			<summary className="w-full flex justify-between p-6 items-center">

				<RichText
					tagName='h3'
					withoutInteractiveFormatting={true}
					allowedFormats={[]}
					value={summary}
					onChange={(summary) => setAttributes({ summary: summary.replace(/<[^>]*>/g, '') })}
					placeholder='Enter summary...'
					className='mb-0'
				/>

				<svg className="transition-wp duration-wp min-w-10 ml-10" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
					<circle cx="20" cy="20" r="20" fill="white"/>
					<path
						d="M20 12V28M12 20H28"
						stroke="#1B5E3C"
						stroke-width="4"
						stroke-linecap="round"
					/>
				</svg>
			</summary>

			<div class="tnc-accordion-item-content p-6 pt-0">
				<InnerBlocks
					allowedBlocks={[
						'core/heading',
						'core/paragraph',
						'core/list',
						'core/list-item',
						'core/image'
					]}
					templateLock={false}
				/>
			</div>
		</details>
	);
}
