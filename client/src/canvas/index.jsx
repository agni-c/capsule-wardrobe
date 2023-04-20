import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
import Shirt from './Shirt';

const CanvasModal = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			{/* <CameraRig> */}
			{/* <Backdrop /> */}
			<Center>
				<Shirt />
			</Center>
			{/* </CameraRig> */}
		</Canvas>
	);
};

export default CanvasModal;
