import React from 'react';

export const ConsultancyModal = ({ id }) => {
	return (
		<>
			<div className='grid grid-cols-2 p-2'>
				<div className='border rounded-xl p-2'>
					<div className='flex space-x-5'>
						<img
							src='https://randomuser.me/api/portraits/men/99.jpg'
							alt=''
							className='rounded-full'
						/>
						<div className='flex flex-col justify-center'>
							<h1 className='font-bold'>Pepito Perez</h1>
							<h2 className='text-xs'>Ing. Informatica</h2>
						</div>
					</div>
                    <br />
					<div className='text-center'>
						<h1>Asesorias de:</h1>
						<h2>Calculo diferencial</h2>
						<h2>Fisica</h2>
					</div>
				</div>
                <div>
                    
                </div>
			</div>
			<div className='text-right'>
				<button>fsd</button>
			</div>
		</>
	);
};
