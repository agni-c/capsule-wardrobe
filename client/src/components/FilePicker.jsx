import React from 'react';
import CustomButtion from './CustomButtion';

const FilePicker = ({ file, setFile, readFile }) => {
	return (
		<div className='filepicker-container'>
			<div className='flex-1 flex flex-col'>
				<label htmlFor='file-upload' className='filepicker-label'>
					upload file
				</label>
				<input
					type='file'
					id='file-upload'
					accept='image/*'
					onChange={e => setFile(e.target.files[0])}
				/>
				<p className='mt-2'>
					{' '}
					{file === '' ? 'No file selected' : file.name}
				</p>
			</div>

			<div className='mt-4 flex flex-wrap gap-3'>
				<CustomButtion
					type={'outline'}
					title={'Logo'}
					handleClick={() => readFile('logo')}
					customStyles={'text-xs'}
				/>
				<CustomButtion
					type={'filled'}
					title={'Full'}
					handleClick={() => readFile('full')}
					customStyles={'text-xs'}
				/>
			</div>
		</div>
	);
};

export default FilePicker;
