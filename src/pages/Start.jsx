import { useState } from 'react';
import { Login } from '../components/Login';

export const Start = () => {
	const [modalState, setModalState] = useState('hidden');

	const handleModal = (visible) => {
		if (visible) {
			setModalState('block');
		} else {
			setModalState('hidden');
		}
	};
	return (
		<div className='h-[94vh] pt-24 overflow-hidden'>
			<div className='pb-11 bg-UAO2 bg-center bg-no-repeat bg-cover flex flex-col justify-evenly items-center h-full overflow-hidden  gap-3'>
				<h1 className='text-5xl font-bold text-white'>
					Sistema gestor de asesorias
				</h1>
				<div className='w-[45rem] border rounded border-transparent h-96 bg-black'>
					a
				</div>
				<button
					onClick={() => handleModal(true)}
					htmlFor='my-modal-4'
					className='bg-red-600 w-80 text-3xl text-white h-16 border border-transparent rounded-md'>
					Iniciar sesion
				</button>
			</div>
			<footer className='absolute bottom-0 bg-red-600 w-screen h-14' />
			<Login
				handleModal={handleModal}
				visible={modalState}
			/>
		</div>
	);
};
