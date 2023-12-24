import React, { useRef } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import {} from 'framer-motion';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const ShirtAlt = () => {
	const snap = useSnapshot(state);
	const ref = useRef();
	// importing 3d model (public path)
	const { nodes, materials } = useGLTF('/tshirt/scene.gltf');
	// adding sticker on the model (Dcal)
	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);

	useFrame((state, delta) =>
		easing.dampC(materials['lambert1'].color, snap.color, 0.25, delta)
	);

	// sometimes group doesn't update so we need to give it a key
	const stateString = JSON.stringify(snap);
	return (
		<group key={stateString} ref={ref}>
			<mesh
				castShadow
				geometry={nodes['T_Shirt_male']['geometry']}
				material={materials['lambert1']}
				material-rougeness={0.1}
				dispose={null}>
				{snap.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0, 0.04, 0.15]}
						rotation={[0, 0, 0]}
						scale={0.15}
						map={logoTexture}
						map-anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
		</group>
	);
};

export default ShirtAlt;
