import React from 'react';
import { useLocation } from 'react-router-dom';

export const ConsultancyModal = ({ id, handleModal }) => {
	return (
		<>
			<div className='grid grid-cols-2 p-2 h-full space-x-2'>
				<div className='border border-gray-300 rounded-xl p-2 shadow-xl'>
					<h1 className='rounded-t-xl bg-red-600 text-white'>
						Detalles Asesor
					</h1>
					<div className='flex space-x-5 my-4 px-2'>
						<img
							src='https://randomuser.me/api/portraits/men/99.jpg'
							alt=''
							className='rounded-full'
						/>
						<div className='flex flex-col justify-center'>
							<h1 className='font-bold'>Pepito Perez</h1>
							<div className='text-xs'>Ing. Informatica</div>
						</div>
					</div>
					<div className='text-left'>
						<h1 className='font-bold'>Asesorias de:</h1>
						<ul className='list-disc ps-7'>
							<li>Calculo diferencial</li>
							<li>Fisica</li>
							<li>Calculo integral</li>
							<li>Algoritmia y Programación</li>
						</ul>
					</div>
				</div>
				<div className='border border-gray-300 rounded-xl pt-2 shadow-xl'>
					<h1 className='rounded-t-xl bg-red-600 text-white'>
						Detalles Asesoria
					</h1>
					<div className='text-center p-3 grid grid-cols-2'>
						<div className='space-y-2'>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Asignatura</h1>
								<span className='text-sm'>Calculo 1</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Fecha</h1>
								<span className='text-sm'>12/12/2021</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Hora</h1>
								<span className='text-sm'>12:00 - 1:00</span>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Salón</h1>
								<span className='text-sm'>4101</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Aulas</h1>
								<span className='text-sm'>4</span>
							</div>
							<div className='leading-none'>
								<h1 className='font-bold text-sm'>Piso</h1>
								<span className='text-sm'>1</span>
							</div>
							<h1></h1>
						</div>
						<div className='col-span-2'>
							<h1 className='font-bold text-sm mb-2'>Tema</h1>

							<textarea
								cols='30'
								rows='4'
								placeholder='Tema de la asesorias...'
								disabled={useLocation().pathname === '/inicio'}
								className='border border-gray-300 rounded-lg w-full px-2 py-0.5'>
								{useLocation().pathname === '/inicio'
									? 'Derivadar por metodo... arreglar el max h'
									: ''}
							</textarea>
						</div>

						<div className='flex col-span-2 justify-end mt-3'>
							{useLocation().pathname === '/inicio' ? (
								<button
									type='button'
									className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
									Cancelar
								</button>
							) : (
								<button
									type='button'
									className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
									Agendar
								</button>
							)}

							<button
								onClick={() => handleModal(false)}
								type='button'
								className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
								Cerrar
							</button>
							{/* Hacer modal para confirmar si quiere cancelar */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
