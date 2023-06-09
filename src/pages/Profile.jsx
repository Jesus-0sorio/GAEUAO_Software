import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Profile = () => {
	const { token } = useSelector((state) => state.auth);

	useEffect(() => {
		console.log(token);
	}, [Profile]);
	return (
		<>
			<div className='bg-red-500 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 rounded-lg'>
				<div className='bg-white overflow-hidden rounded-lg px-4 py-6 sm:px-0 shadow-2xl'>
					<div className='px-4 py-5 sm:p-6'>
						<div className='flex items-center'>
							<div className=''>
								<img
									className='rounded-full'
									src={'https://randomuser.me/api/portraits/men/18.jpg'}
									alt=''
								/>
							</div>
							<div className='ml-5'>
								<h3 className='text-lg leading-6 font-medium text-gray-900'>
									Mi perfil
								</h3>
								<h4>
									<span className='font-bold'>Nombre:</span> { token.name }
								</h4>
								<h4>
									<span className='font-bold'>Carrera:</span> { token.career }
								</h4>
								<h4>
									<span className='font-bold'> Email: </span> { token.email }
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
