import React from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import {} from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
	const snap = useSnapshot(state);
	// importing 3d model (public path)
	const { nodes, materials } = useGLTF('/shirt_baked.glb');
	// adding sticker on the model (Dcal)
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);
	return (
		<group>
			<mesh
				castShadow
				geometry={nodes.T_Shirt_male.geometry}
				material={materials['lambert1']}
				material-rougeness={0.1}
				dispose={null}></mesh>
		</group>
	);
};

export default Shirt;
