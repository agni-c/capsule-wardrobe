import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const CustomButtion = ({ type, title, customStyles, handleClick }) => {
	const snap = useSnapshot(state);
	const generateStyles = type => {
		switch (type) {
			case 'filled':
				return {
					backgroundColor: snap.color,
					color: 'white'
				};
			case 'outlined':
				return 'bg-transparent border-2 border-black text-black';
			default:
				return 'bg-black text-white';
		}
	};
	return (
		<button
			className={`px-2 h-fit py-1.5 flex-1 rounded-md ${customStyles}`}
			style={generateStyles(type)}
			onClick={handleClick}>
			{title}
		</button>
	);
};

export default CustomButtion;
