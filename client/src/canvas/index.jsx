import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import CameraRig from './CameraRig';
import Backdrop from './Backdrop';
// https://stackoverflow.com/questions/66868663/jsconfig-json-gives-ts-errors?rq=1
import Shirt from './Shirt';
import ShirtAlt from './ShirtAlt';
import { TshirtModel } from '../assets/models/TshirtModel';

const CanvasModal = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0.5], fov: 40 }}
			gl={{ preserveDrawingBuffer: true }}
			className='w-full max-w-full h-full transition-all ease-in'>
			<ambientLight intensity={0.5} />
			<Environment preset='city' />

			<CameraRig>
				<Backdrop />
				<Center>
					<Shirt />
					{/* <ShirtAlt /> */}
					{/* <TshirtModel /> */}
				</Center>
			</CameraRig>
		</Canvas>
	);
};

export default CanvasModal;
