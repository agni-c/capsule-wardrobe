import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation
} from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';

const Home = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className='home' {...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						<img
							src={snap.logoDecal}
							alt='logo'
							className='w-8 h-8 object-contain'
						/>
					</motion.header>
					<motion.div className='head-content' {...headContainerAnimation}>
						<motion.div className='head-text' {...headTextAnimation}>
							{/* pagebreak on big screens */}
							LET'S <br className='xl:block hidden' /> DO IT.
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className='flex flex-col gap-5'>
							<p className='max-w-md font-normal text-gray-600 '>
								Create your unique capsule wardrobe cloths with our brand new 3D
								customization tools <strong>Unleash your imagination</strong>{' '}
								and define your own style.
							</p>
						</motion.div>
						<CustomButton
							type='filled'
							title='Customize!'
							handleClick={() => (state.intro = false)}
							customStyles='w-fit px-4 py-2.5 font-bold text-sm'
						/>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
};

export default Home;
