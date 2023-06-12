import React from 'react';
import CustomButtion from './CustomButtion';

const AIPicker = ({
	prompt,
	setPrompt,
	generatingImg,
	handleSubmit
}) => {
	return (
		<div className='aipicker-container'>
			<textarea
				className='aipicker-textarea'
				placeholder='Ask AI...'
				rows={5}
				value={prompt}
				onChange={e => setPrompt(e.target.value)}
			/>
			<div className='flex flex-wrap gap-3'>
				{generatingImg ? (
					<CustomButtion
						type={'outline'}
						title={'Asking AI...'}
						customStyles='text-xs'
					/>
				) : (
					<>
						<CustomButtion
							type={'outline'}
							title={'AI Logo'}
							handleClick={() => handleSubmit('logo')}
						/>
						<CustomButtion
							type={'filled'}
							title={'AI Full'}
							handleClick={() => handleSubmit('full')}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default AIPicker;
