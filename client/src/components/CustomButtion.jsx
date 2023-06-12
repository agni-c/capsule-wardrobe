import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import getContrastingColor from '../hooks/getContrastingColor';

const CustomButtion = ({
	type,
	title,
	customStyles,
	handleClick
}) => {
	const snap = useSnapshot(state);
	const generateStyles = type => {
		switch (type) {
			case 'filled':
				return {
					backgroundColor: snap.color,
					color: getContrastingColor(snap.color)
				};
			case 'outline':
				return {
					borderWidth: '1px',
					borderColor: snap.color,
					color: getContrastingColor(snap.color)
				};
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
